const url = require('url')

const myUrl = new URL('http://example.com/hello.html?id=1222&status=acive')
// serialize 
console.log(myUrl.host)
console.log(myUrl.port)
// path name 
console.log(myUrl.pathname)
console.log(myUrl.search)

myUrl.searchParams.append('token','123')
console.log(myUrl.searchParams)
console.log(myUrl.href)