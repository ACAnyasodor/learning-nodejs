const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
       return res.end('Homepage')
    }
    if(req.url==='/about'){
        return res.end('our little history')
    }
    res.end(`
    <h1> oops! page not found </h1>
    <p>Go back <a href='/'>home</a></p>
    `)
    
})

server.listen(400)
