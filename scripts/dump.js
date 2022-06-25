const r = require('libgovno').requests;
const html = require('node-html-parser');
const assert = require('assert');
const fs = require('fs');

const PARSER_FIELDS = [
    {name: 'struct', fields: ['Field','Type','Description']},
    {name: 'method', fields: ['Parameter', 'Type', 'Required', 'Description']}   
]

const PARSER_HEADER = `/** This file was automatically generated by https://github.com/teletypes/js */`;

class TelegramParser
{
    /** @type {HTMLElement} */
    #root;
    /** @type {HTMLElement} */
    #content;
    /** @type {string | null} */

    /** @param {string | HTMLElement} data */
    constructor(data) {
        /** @type {HTMLElement} */
        this.#root = typeof data == 'string' && html.parse(data) || data;
        assert(typeof this.#root == 'object', 'Failed to find root element');
        this.#content = this.#root.querySelector('#dev_page_content');
        assert(typeof this.#content == 'object', 'Failed to find content element');
    }

    parse() {
        let it =  this.#content.childNodes[1];
        assert(it != null, 'No childs in the page content');

        /** @type {string | null} */
        let sectionname = null;

        const typelist = {};
        let curtype = null;
        let curfields = [];

        const ELEMENT_NODE = 1;

        let isparsing = false;
        for (;it ;it = it.nextElementSibling) {
            if (it.nodeType != ELEMENT_NODE)
                continue;

            if (it.tagName == 'H3') {
                sectionname = it.textContent;
                continue;
            }

            if (it.tagName == 'H4') {
                curtype = {
                    name: it.textContent,
                    desc: [],
                    href: '',
                    fields: [],
                    type: 'unknown'
                }
                
                for (const i in it.childNodes) {
                    const node = it.childNodes[i];
                    if (node.nodeType != ELEMENT_NODE || node.tagName != 'A')
                        continue;

                    if (node.hasAttribute('href'))
                        curtype.href = node.getAttribute('href');
                }


                isparsing = true;
                continue;
            }

            if (!isparsing)
                continue;

            else if (it.tagName == 'P' || it.tagName == 'BLOCKQUOTE' || it.tagName == 'DIV') {
                if (it.tagName[0] == 'D')
                    continue;

                for (const i in it.childNodes) {
                    const v = it.childNodes[i];
                    if (v.nodeType == ELEMENT_NODE && v.tagName == 'A') {
                        curtype.desc.push([v.textContent, v.getAttribute('href')]);
                    }
                    else {
                        let last = curtype.desc[curtype.desc.length-1];
                        if (!last || last.href != null)
                            last = curtype.desc[curtype.desc.push(['', null])-1];

                        last[0] += v.textContent;
                    }
                }

                if (!it.nextElementSibling || it.nextElementSibling.tagName != 'H4')
                    continue;
            }
            else if (it.tagName == 'UL') {
                for (const i in it.childNodes) {
                    const li = it.childNodes[i];
                    if (li.nodeType != ELEMENT_NODE || li.tagName != 'LI')
                        continue;

                    for (const j in li.childNodes) {
                        const a = li.childNodes[j];
                        if (a.nodeType != ELEMENT_NODE || a.tagName != 'A')
                            continue;

                        if (a.hasAttribute('href')) {
                            const field = {name: a.textContent, desc: []};
                            field.type = [ [ a.textContent, a.getAttribute('href') ] ];

                            curtype.fields.push(field);
                            curtype.type = 'merged';
                        }
                    }
                }
            }
            else if (it.tagName == 'TABLE') {
                if (!curtype.desc)
                    curtype.desc = [];

                for (const i in it.childNodes) {
                    
                    const v = it.childNodes[i];
                    if (v.nodeType != ELEMENT_NODE)
                        continue;

                    if (v.tagName == 'THEAD') {
                        for (const j in v.childNodes) {
                            const tr = v.childNodes[j];
                            if (tr.nodeType != ELEMENT_NODE || tr.tagName != 'TR')
                                continue;

                            curfields = [];
                            for (const k in tr.childNodes) {
                                const th = tr.childNodes[k];
                                if (th.nodeType != ELEMENT_NODE || th.tagName != 'TH')
                                    continue;

                                curfields.push(th.textContent);
                            }

                            curtype.type = (() => { 
                                for (let i in PARSER_FIELDS) {
                                    const pf = PARSER_FIELDS[i];
                                    let count = 0;
                                    for (let k in pf.fields) {
                                        if (curfields.includes(pf.fields[k]))
                                            ++count;
                                    }

                                    if (count == curfields.length)
                                        return pf.name;
                                }                           
                                
                                return null;
                            })();

                            console.assert(typeof curtype.type == 'string', `Failed to get type from the table fields [${curfields}]`);
                        }
                    }
                    else if (v.tagName == 'TBODY') {
                        for (const j in v.childNodes) {
                            
                            const tr = v.childNodes[j];
                            if (tr.nodeType != ELEMENT_NODE || tr.tagName != 'TR')
                                continue;

                            const field = {};
                            let f = 0;
                            for (const k in tr.childNodes) {
                                const td = tr.childNodes[k];
                                if (td.nodeType != ELEMENT_NODE || td.tagName != 'TD')
                                    continue;

                                if (curfields[f] == 'Type') {
                                    field[curfields[f]] = [];
                                    const ft = field[curfields[f]];

                                    for (const c in td.childNodes) {
                                        const child = td.childNodes[c];
                                        if (child.nodeType == ELEMENT_NODE && child.tagName == 'A')
                                            ft.push([child.textContent, child.getAttribute('href')]);
                                        else {
                                            let last = ft[ft.length-1];
                                            if (!last || last.href != null)
                                                last = ft[ft.push(['', null])-1];
                    
                                            last[0] += child.textContent;
                                        }
                                    }

                                    f++;
                                }
                                else {
                                    const elems = [''];
                                    for (const t in td.childNodes) {
                                        const node = td.childNodes[t];
                                        const last = elems[elems.length-1];
                                        const href = node.nodeType == ELEMENT_NODE && node.tagName == 'A' ? node.getAttribute('href') : null;

                                        if (href) {
                                            elems.push([node.textContent, href]);
                                        }
                                        else if (typeof last == 'string') {
                                            elems[elems.length-1] += node.textContent;
                                        }
                                        else
                                            elems.push(node.textContent);
                                    }
                                    
                                    field[curfields[f++]] = elems;
                                }
                            }

                            Object.entries(field).forEach((v, i) => {
                                switch(v[0]) {
                                case 'Field':
                                case 'Parameter': { field.name = v[1]; break; }
                                case 'Type': { 
                                    field.type = v[1]; 
                                    break; 
                                }
                                case 'Required': { field.optional = v[1] == 'Optional'; break; }
                                case 'Description': { field.desc = v[1]; break; }
                                default:
                                    console.log(`Unknown field name "${v[0]}" at type ${curtype.name}`);
                                }

                                delete field[v[0]];
                            });

                            curtype.fields.push(field);
                        }
                    }
                }
            }

            if (curtype != null) {
                if (!typelist[sectionname])
                    typelist[sectionname] = [];

                typelist[sectionname].push(curtype)
            }
                
            isparsing = false;
        }

        // removing every unreferenced, unknown or merged (because it can be invalid) type
        Object.entries(typelist).forEach((v, vi) => {
            for (let i=v[1].length-1; i >= 0; i--) {
                const type = v[1][i];

                // methods like getMe without parameters
                if (type.type != 'method' && !type.name.match(/\s/)) {
                    for (const j in type.desc) {
                        if (type.desc[j][0].match(/^(Use this method|A .+ method)/)) {
                            console.info(`Treating type "${type.name}" as method because of it's description`);
                            type.type = 'method';
                            break;
                        }
                    }
                }

                if (type.type == 'unknown' || type.type == 'merged') {
                    if (!Object.entries(typelist).find(v => { 
                        for (const j in v[1]) {
                            const ntype = v[1][j];
                            for (const k in ntype.fields) {
                                const field = ntype.fields[k];
                                for (const t in field.type) {
                                    if (field.type[t][1] == type.href)
                                        return true;
                                }
                               
                            }
                        }
                    }))
                    {
                        typelist[v[0]].splice(i, 1);
                    }
                }
            }
        });

        // fixing types to be ts-like
        for (const i in typelist) {
            const section = typelist[i];
            for (const j in section) {
                const type = section[j];

                for (const k in type.fields) {
                    let desctext = '';
                    const field = type.fields[k];
                    field.type = this.#resolve_type(field.type, typelist, true);
                    if (field.optional == undefined) {
                        if (typeof field.desc == 'object' && field.desc.length > 0) {
                            field.optional = field.desc[0].startsWith('Optional. ');
                            if (field.optional)
                                field.desc[0] = field.desc[0].slice(10, field.desc[0].length);
                        }
                    }

                    for (const t in field.desc) {
                        const d = field.desc[t];
                        if (typeof d == 'object')
                            desctext += this.#format_href(type.type == 'method', d, typelist);
                        else {
                            console.log(d)
                            desctext += d;
                        }
                    }

                    field.desc = desctext;
                }

                if (type.type == 'method') {
                    const retvariants = [];
                    let nextarr = false;
                    let nextret = false;

                    for (const k in type.desc) {
                        const desc = type.desc[k];

                        if (desc[0].match('Returns True on success.')) {
                            retvariants.push('boolean');
                            break;
                        }

                        if (desc[0].match('Returns Int on success.')) {
                            retvariants.push('number');
                            break;
                        }

                        if (desc[0].match(/Returns .+ String on success./)) {
                            retvariants.push('string');
                            break;
                        }

                        if (desc[0].match('True is returned.')) {
                            retvariants.push('boolean');
                        }

                        if (desc[0].endsWith('returns an Array of ') || desc[0].match(/.( An | Returns )Array of /)) {
                            nextarr = true;
                            continue;
                        }

                        if (desc[0].match(/(Returns (the )?(\w+ |.+ as |.+ as a |.+ of a )?|On success, returns a )$/)) {
                            nextret = true;
                            continue;
                        }

                        if (nextret) {
                            if (desc[1] != null && (desc[0].match(/^.+ on success./) || desc[0].match(/^\w+ object./)))
                                retvariants.push(this.#type_from_href(desc[1], typelist).name);

                            nextret = false;
                        }
                        else if (nextarr) {
                            if (desc[1] != null)    
                                retvariants.push(this.#type_from_href(desc[1], typelist).name + '[]');

                            nextarr = false;
                        }
                        else if (desc[1] != null) {
                            let match = desc[0].match(/On success, returns a .+\./);
                            if (match) {
                                retvariants.push(this.#type_from_href(desc[1], typelist).name);
                                break;
                            }

                            match = desc[0].match(/\w+ is returned/);
                            if (match && !match[0].startsWith('True')) {
                                retvariants.push(this.#type_from_href(desc[1], typelist).name);
                            }
                        }
                    }

                    if (!retvariants.length) {
                        console.info(`Method "${type.name}" without return type! Treating like any"`);
                        type.returns = ['any'];
                        continue;
                    }

                    type.returns = retvariants;
                }

                let desctext = '';
                for (const k in type.desc) {
                    const d = type.desc[k];
                    if (d[1] && d[1][0] == '#') {
                        desctext += this.#format_href(type.type == 'method', d, typelist);
                    }

                    desctext += type.desc[k][0];
                }

                type.desc = desctext;
            }        
        }

        //console.log(typelist['Available methods'])
        return typelist;
    }

    #format_href(ismethod, d, typelist) {
        let text = '';
        const resolved = this.#type_from_href(d[1], typelist);
        const nextword = d ? d[0].match(/^\w+/) : null;
        if (resolved && nextword) {
            d[0] = d[0].slice(nextword[0].length);
            text += `{@link ${(ismethod ? resolved.type != 'method' : resolved.type == 'method') ? 'T.' : ''}${resolved.name}|${nextword[0]}}`;
        }
        return text;
    }

    #type_from_href(href, typelist) {
        for (const i in typelist) {
            const section = typelist[i];
            for (const j in section) {
                const type = section[j];
                if (type.href == href)
                    return type;
            }
        }
        
        return null;
    }

    isprimitive(type) {
        return type == 'string' || type == 'boolean' || type == 'number';
    }

    string_type(type, prefix) {
        prefix = prefix ?? '';

        let typetext = '';
        if (type instanceof Array) {
            let isfirst = true;
            for (const i in type) {
                if (type[i] instanceof Array) {
                    let arrtext = `${isfirst ? '' : ' | '}Array<`;
                    let arrfirst = true;

                    const subarr = type[i];
                    for (const k in subarr) {
                        arrtext += `${arrfirst == true ? '' : ' | '}${this.isprimitive(subarr[k]) == true ? '' : prefix}${subarr[k]}`;
                        arrfirst = false;
                    }
                    arrtext += '>';
                    typetext += arrtext;
                    isfirst = false;
                }
                else {
                    typetext += `${isfirst ? '' : ' | '}${this.isprimitive(type[i]) == true ? '' : prefix}${type[i]}`;
                    isfirst = false;
                }
            }
        }
        else
            typetext = type;
        
        return typetext;
    }

    #resolve_type(field, typelist, frommain) {
        if (!frommain && typelist && typeof field == 'object' && field.length == 2 && typeof field[0] == 'string') {
            const href = field[1];

            if (href) {
                let found = false;

                for (const i in typelist) {
                    let canbreak = false;

                    const section = typelist[i];
                    for (const j in section) {
                        const type = section[j];
                        if (type.href == href) {
                            found = true;
                            canbreak = true;
                            break;
                        }
                    }

                    if (canbreak)
                        break;
                }

                if (!found)
                    console.info(`Found unknown not primitive type "${field[0]}" with href "${href}"`);

                return field[0];
            }
            
            return this.#resolve_type(field[0]);
        }
        else if (typeof field == 'object') {
            const vars = [];
            
            let text = '';
            let href = null;
            for (const i in field) {
                const f = field[i];
                if (f[1]) {
                    text = f[0];
                    href = f[1];
                    if (text.endsWith(' or '))
                        text = text.slice(0, text.length-4);
                    //else if (text.endsWith(' and '))
                    //    text = text.slice(0, text.length-5);
                    //else if (text.endsWith(', '))
                    //    text = text.slice(0, text.length-2);

                    const s = text.split(' or ');
                    if (s.length > 1) {
                        for (const j in s) {
                            vars.push([s[j], null]);
                        }

                        href = null;
                        text = '';
                        continue;
                    }
                    

                    vars.push([text,f[1]]);
                    href = null;
                    text = '';
                    continue;
                }
                else {
                    const s = f[0].split(' or ');
                    if (s.length > 1) {
                        for (const j in s) {
                            vars.push([s[j], null]);
                        }
                        continue;
                    }
                    
                    const sof = f[0].split('Array of ');
                    if (sof.length > 1) {
                        for (let j=0; j < sof.length-1; j++)
                            vars.push(['Array of ', null]);

                        for (const j in sof) {
                            if (sof[j].length != 0)
                                vars.push([sof[j], null]);
                        }
                        continue;
                    }

                    text += f[0];
                }

                vars.push([text, href]);
            }

            // array types
            let arrdeep = 0;
            let lastvar = null;
            let newvars = [];
            let massarr = [];
            let nextinmass = false;

            for (const i in vars) {
                const v = vars[i];
                const isarr = v[0] == 'Array of ';
                const islast = i == vars.length-1;

                if (isarr) {
                    arrdeep++;
                }
                else if (arrdeep > 0) {
                    nextinmass = false;
                    if (v[0].endsWith(', ')) {
                        v[0] = v[0].slice(0, v[0].length-2);
                        nextinmass = true;

                    }
                    else if (v[0].endsWith(' and ')) {
                        v[0] = v[0].slice(0, v[0].length-5);
                        nextinmass = true;
                    }

                    
                    if (!nextinmass || islast) {
                        if (massarr.length > 0) {
                            massarr.push(this.#resolve_type(v, typelist, false));
                            newvars.push(massarr);
                            
                            massarr = [];
                        }
                        else
                            newvars.push(this.#resolve_type(v, typelist, false));

                        arrdeep = 0;
                    }
                    else if (nextinmass) {
                        massarr.push(this.#resolve_type(v, typelist, false));
                    }
                    else
                        newvars.push(this.#resolve_type(v, typelist, false));
                }
                else {
                    newvars.push(this.#resolve_type(v, typelist, false));
                    massarr = [];
                    nextinmass = false;
                }
            }

            let typearr = [];
            for (const i in newvars) {
                typearr.push(newvars[i]);
            }

            return typearr;
        }
        else if (typeof field == 'string') {            
            switch(field) {
            case 'Float':
            case 'Float number':
            case 'Integer': { return 'number'; }
            case 'String': { return 'string'; }
            case 'True': { return 'true'; }
            case 'Boolean': { return 'boolean'; }
            default:
                const arr = field.split('Array of ');
                if (arr.length > 1)
                    return arr[arr.length-1] + '[]'.repeat(arr.length-1);

                //console.trace(`Unknown string type "${field}"`);
                return field;
            }
        }

        throw Error('#resolve_type: Wrong usage');
    }
}


r.get('https://core.telegram.org/bots/api', {}, (err, data) => {
    if (err)
        return console.error(`Parsing failed: ${err}`);

    const parser = new TelegramParser(data.text);

    console.time('Parsing');
    const parsed = (() => {
        return parser.parse(data.text);
        try { return parser.parse(data.text); }
        catch(err) { return console.error(`Parsing failed: ${err}`); }
        
    })();
    console.timeEnd('Parsing');
    
    if (!parsed)
        return;

    
    const sections = {};

    const structs = [];
    const methods = [];
    const mergeds = [];
    const unknowns = [];

    Object.entries(parsed).forEach(v => {
        const section = v[1];
        for (const i in section) {
            const type = section[i];
            if (type.type == 'method')
                methods.push(type);
            else if (type.type == 'struct')
                structs.push(type);
            else if (type.type == 'merged')
                mergeds.push(type);
            else if (type.type == 'unknown')
                unknowns.push(type);
        }
    });

    let structstext = `${PARSER_HEADER}\nimport { TelegramMethods as T } from \'./methods\';\nexport namespace TelegramTypes {`;

    for (const i in unknowns) {
        const unknown = unknowns[i];
        structstext += `\n/** ${unknown.desc} */\ntype ${unknown.name} = any;`;    
    }

    for (const i in mergeds) {
        const merged = mergeds[i];
        let fieldtext = merged.fields[0].type;
        let isfirst = true;
        for (const j in merged.fields) {
            const field = merged.fields[j];
            if (!isfirst)
                fieldtext += ` | ${parser.string_type(field.type)}`;
            isfirst = false;
        }
        structstext += `\n/** ${merged.desc} */\ntype ${merged.name} = ${fieldtext};`
    }

    for (const i in structs) {
        const struct = structs[i];
        let fieldtext = '';
        for (const j in struct.fields) {
            const field = struct.fields[j];
            const islast = j == struct.fields.length-1;
            fieldtext += `\n\t/** ${field.desc} */\n\t${field.name}${field.optional == true ? '?' : ''}: ${field.type}${islast ? '' : ','}`;
        }

        structstext += `\n/** ${structs[i].desc} */\ninterface ${structs[i].name} { ${fieldtext}\n}`;
    }

    structstext += '\n}';

    let methodstext = `${PARSER_HEADER}\nimport { TelegramTypes as T } from \'./types\';\n\nexport namespace TelegramMethods {\n`;
    for (const i in methods) {
        const method = methods[i];
        let fieldtext = '';
        for (const j in method.fields) {
            const islast = j == method.fields.length-1;
            const field = method.fields[j];
            fieldtext += `\n\t/** ${field.desc} */\n\t${field.name}${field.optional == true ? '?' : ''}: ${parser.string_type(field.type, 'T.')}${islast ? '' : ','}`;
        }
        if (fieldtext.length != 0)
            fieldtext += '\n';

        let firstret = true;
        let rettext = '';
        for (const j in method.returns) {
            const returns = method.returns[j];
            rettext += `${firstret ? '' : ' | '}${parser.isprimitive(returns) == true ? '' : 'T.'}${parser.string_type(returns, 'T.')}`;
            firstret = false;
        }
        
        methodstext += `/** ${method.desc} */\ntype ${method.name} = (${fieldtext.length != 0 ? 'a:{' + fieldtext + '}' : ''}) => ${rettext};\n`;
    }

    methodstext += '}';

    //console.log(structstext)

    fs.writeFile('./lib/types.d.ts', structstext, (err) => { if (err) console.error(err); });
    fs.writeFile('./lib/methods.d.ts', methodstext, (err) => { if (err) console.error(err); });
});