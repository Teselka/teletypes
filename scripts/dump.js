const r = require('libgovno').requests;
const assert = require('assert');
const html = require('node-html-parser');
const fs = require('fs');

let forwardtypes = [];
const resolve_type = ((raw, asmethodarg) => {
    switch(raw) {
    case 'True':
    case 'Boolean': { return 'boolean'; }
    case 'Float':
    case 'Float number':
    case 'Integer': { return 'number'; }
    case 'String': { return 'string'; }
    default: {
        let arr = raw.split(/^Array of /, 2);
        if (arr.length == 2) {
            let narr = arr[1].split(', ');
            if (narr.length > 1) {
                let text = `Array<${resolve_type(narr[0], asmethodarg)}`;
                let isfirst = true;
                narr.forEach(v => { if (!isfirst) { text += ` | ${resolve_type(v, asmethodarg)}`; } isfirst = false; });
                text += '>';
                return text;
            }

            return `${resolve_type(arr[1], asmethodarg)}[]`;
        }

        const orfn = ((separator) => {
            arr = raw.split(separator);
            if (arr.length > 1) {
                let type = `${resolve_type(arr[0], asmethodarg)}`;
                let isfirst = true;
                arr.forEach(v => {
                    if (!isfirst)
                        type += ` | ${resolve_type(v, asmethodarg)}`; 
                    isfirst = false;
                });

                return type;
            }
        });

        {
            let a = orfn(' or ');
            if (a)
                return a;
            let b = orfn(' and ');
            if (b)
                return b;
        }
        
        if (!forwardtypes.includes(raw))
            forwardtypes.push(raw);
        
        return (asmethodarg && `T.${raw}` || raw);
    };
    }
})

r.get('https://core.telegram.org/bots/api', {}, (err, resp) => {
    if (err)
        return console.error(`Request failed with error: ${err}`);
    
    const root = html.parse(resp.text);
    const content = root.querySelector('#dev_page_content');
    
    const typelist = [];
    const funclist = [];

    const first = (() => {
        let elem = null;

        content.childNodes.forEach((v, i) => {
            // ghetto maybe
            if (v.tagName == 'H3' && v.childNodes.length == 2 && v.textContent == 'Available types') {
                elem = v;
                return true;
            }
        });

        return elem;
    })();
    
    let it = first.nextElementSibling;
    let inparse = false;
    let typename = null;
    let typedesc = null;
    let typefields = [];
    let rownames = {};
    let wasmethodtable = false;
    let wasunknowntable = false;
    let nofieldtypes = [];

    let mergetypesleft = 0;
    let mergedtypes = [];

    for (;it;it = it.nextElementSibling) {        
        assert(inparse && it.tagName == 'H4' || true, 'Unexpected <h4> tag!');

        if (it.tagName == 'H3') {
            inparse = false;
            wasmethodtable = false;
            wasunknowntable = false;
        }
        else if (it.tagName == 'H4') {
            inparse = true;
            typename = it.textContent;
            wasmethodtable = false;
            wasunknowntable = false;
        }
        else if (inparse && it.tagName == 'P') {
            typedesc = it.textContent;
            const next = it.nextElementSibling;
            
            if (!wasmethodtable && !wasunknowntable && next && next.tagName != 'TABLE' && typename.split(' ', 2).length == 1) {
                if (next.tagName == 'UL') {
                    let count = 0;

                    const merged = [];
                    next.childNodes.forEach(v => {
                        if (v.tagName == 'LI')
                            merged.push(v.textContent);
                    });

                    console.assert(`Two marged types with the same name "${typename}"! Output may be wrong!`);
                    mergedtypes.push({name:typename, desc: typedesc, list:merged});
                }
                else
                    nofieldtypes.push({name:typename, desc: typedesc})
            }
            wasmethodtable = false;
            wasunknowntable = false;
        }
        else if (inparse && it.tagName == 'TABLE') {
            //assert(it.childNodes.length == 5, `Unexpected table elements count! Expected 5, found ${it.childNodes.length}!`);

            it.childNodes.forEach((v, i) => {
                if (v.tagName == 'THEAD') {                    
                    v.childNodes.forEach((v, i) => {
                        if (v.tagName == 'TR') {
                            const cmp = ['Field', 'Type', 'Description'];
                            const fncmp = ['Parameter', 'Type', 'Required', 'Description'];
                            //assert(v.childNodes.length == cmp.length, `Unexpected table list count! Expected ${cmp.length}, found ${v.childNodes.length}!`);
        
                            rownames = [];
                            v.childNodes.forEach((v, i) => { 
                                if (v.tagName == 'TH') {
                                    rownames.push(v.textContent);

                                    if (!cmp.includes(v.textContent)) {
                                        if (!fncmp.includes(v.textContent)) {
                                            console.warn(`Unexpected table head name "${v.textContent}", expected one of these: [${cmp}] or these [${fncmp}]. Skipping...`);
                                            wasunknowntable = true;
                                            return true;
                                        }
                                        
                                        wasmethodtable = true;
                                    }
                                    
                                    
                                }
                            });

                            return true;
                        }
                    });

                    return true;
                }
            });

            if (wasunknowntable) {
                continue;
            }

            const tbody = it.childNodes.find((v) => {return v.tagName == 'TBODY';});
            assert(!!tbody, `TBODY element was not found`);

            typefields = [];
            tbody.childNodes.forEach((v, i) => {
                if (v.tagName == 'TR') {
                    //assert(rownames.length == v.childNodes.length, `Unexpected row elements count! Expected ${rownames.length}, found ${v.childNodes.length}!`);
                    
                    counter = 0;
                    const obj = {};
                    v.childNodes.forEach((v, i) => {
                        if (v.tagName == 'TD') {
                            obj[rownames[counter++]] = v.textContent;
                        }
                    });
                    typefields.push(obj);
                }
            });

            const fields = [];

            typefields.forEach(v => {
                const obj = {};
                
                Object.entries(v).forEach(v => {
                    switch(v[0]) {
                    case 'Parameter': { if (wasmethodtable) { obj.name = v[1]; } break; }
                    case 'Field': { obj.name = v[1]; break;}
                    case 'Type': {
                        obj.type = resolve_type(v[1], wasmethodtable);
                        break;
                    }
                    case 'Required': { obj.optional = v[1].startsWith('True'); break; }
                    case 'Description': { 
                        if (!wasmethodtable) {
                            obj.optional = v[1].startsWith('Optional. ');
                            obj.desc = obj.optional && v[1].split('Optional. ', 2)[1] || v[1];
                        }
                        else
                            obj.desc = v[1];
                        break;
                    }
                    }

                });
                fields.push(obj);
            });

            if (wasmethodtable) {
                funclist.push({
                    name: typename,
                    desc: typedesc,
                    fields: fields
                });
            }
            else {
                typelist.push({
                    name: typename,
                    desc: typedesc,
                    fields: fields
                });
            }
            

            inparse = false;
        }
    }

    let text = `/* This file was automatically generated by https://github.com/teletypes/js */\n\n`;
    let mintext = text;

    // forward declaration for everything
    // forwardtypes.forEach(v => {
    //     if (!nofieldtypes.find(e => { return e.name == v; }) && !mergedtypes.find(e => { return e.name == v; })) {
    //         text += `export declare interface ${v}{};\n`;
    //         mintext += `export declare interface ${v}{};`;
    //     }
    // });

    text += `\n/* [BLOCK] Not fully documentated types with unkown structure/type */\n\n`;
    forwardtypes.forEach(v => {
        const e = nofieldtypes.find(e => { return e.name == v; });
        if (e && !typelist.find(e => { return e.name == v; }) && !mergedtypes.find(e => { return e.name == v; })) {
            text += `/** ${e.desc} */\ntype ${e.name} = any; \n\n`;
            mintext += `type ${e.name} = any;`;
        }
    });

    text += `\n/* [BLOCK] Merged structures */\n\n`;
    mergedtypes.forEach(v => {
        let type = `${v.list[0]}`;
        let isfirst = true;
        v.list.forEach(v => {
            if (!isfirst)
                type += ` | ${v}`;

            isfirst = false;
        });

        text += `/** ${v.desc} */\ntype ${v.name} = ${type}; \n\n`;
        mintext += `type ${v.name} = ${type};`;
    });

    text += `\n/* [BLOCK] Normal structures */\n\n`;
    typelist.forEach(v => {
        let fields = '';
        let minfields = '';

        v.fields.forEach(v => {
            let type = v.type;
            if (typeof type == 'object') {
                type = v.type[0];
                let isfirst = false;

                v.type.forEach(v => { type += `${isfirst && v || ''}`; isfirst = true; })
            }

            fields += `\n\t/** ${v.desc} */\n\t${v.name}${v.optional && '?' || ''}: ${v.type},`;
            minfields += `${v.name}${v.optional && '?' || ''}: ${v.type},`;
        });
        
        text += `/** ${v.desc} */\nexport interface ${v.name} { ${fields}\n}\n\n`;
        mintext += `export interface ${v.name}{${minfields}}\n`;
    });

    let functext = '/* This file was automatically generated by https://github.com/teletypes/js */\n\nimport * as T from \'./types\';\n\nexport namespace Methods {';
    funclist.forEach(v => {
        let fields = ''; 
        v.fields.forEach(v => {
            let type = v.type;
            if (typeof type == 'object') {
                type = v.type[0];
                let isfirst = false;

                v.type.forEach(v => { type += `${isfirst && v || ''}`; isfirst = true; })
            }

            fields += `\n\t\t/** ${v.desc} */\n\t\t${v.name}${v.optional && '?' || ''}: ${v.type},`;
        });
        functext += `\t/** ${v.desc} */\n\ttype ${v.name} = (args: {${fields}\n\t}) => any;\n\n`;
        //console.log(v.fields)
    });
    functext += '}';

    fs.writeFile('./lib/types.d.ts', text, (err, data) => {
        if (err)
            return console.error(err);
    });

    fs.writeFile('./lib/methods.d.ts', functext, (err, data) => {
        if (err)
            return console.error(err);
    });


    //console.log(funclist);


    // not used but you can
    // fs.writeFile('./lib/index.min.d.ts', mintext, (err, data) => {
    //     if (err)
    //         return console.error(err);
    // });
});