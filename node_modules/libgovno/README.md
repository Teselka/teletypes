<header>
<h1 style="display: inline">libgovno</h1>
Requests library for humans

[![install size](https://packagephobia.com/badge?p=libgovno)](https://packagephobia.com/result?p=libgovno)
</header>
    
## How to install
1. Install package from npm
```npm install libgovno```

2. Include lib
```const { requests } = require('libgovno');```

## Quick example
```js
// Callbacks
requests.get('https://example.com/', (err, data) => { console.log(data.status); });

// Promises
requests.get('https://example.com/')
    .then((err, data) => {
        console.log(data.status);
    });
    
// Async await
const data = await requests.get('https://example.com/');
    
// Passing some data
requests.get('https://example.com/', { json: {'key':'value'} });

// Link params
requests.get('https://example.com/', { params: {'key':'value'} });

// Cookies
requests.get('https://example.com/', { cookies:[ { name:'aboba',value:'yes' } ] });  
```
 
## Request options
`method: string` - HTTP request method (GET/POST/etc)

`port: string | number` - remote http port

`params: object` - link params `https://example.com/?param=1`

`json: object` - json data

`raw_data: string | Buffer` - raw data buffer

`headers: OutgoingHttpHeaders` - http headers (Accept, User-Agent, etc)

`cookies: Array<object>` - cookies in the following format: [ { name: 'aboba', value: 'yes' } ]

`useragent: string` - request [useragent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)

`timeout: number` - request timeout

`follow_redirects: boolean` - should we follow [location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location) header?

`worldwide: boolean` - `true` by default, automatically adds `www.` to the url

`callback: ResponseCallback` - response callback `(err: Error, data: Response) => {}`

## Response shortcuts
`body: string` - response body

`text: string` - same as body

`headers: object` - response headers

`status: number` - response [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

`status_code: number` - same as status

`encoding: string` - repsonse [content-encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)

`cookies: string` - response [set-cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header, will become `object` in new version

`redirects: number` - count of the http [redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)

`is_redirect: boolean` - returns `true` if `redirects` count more than 0

`json(): object` - parsed json object from body
