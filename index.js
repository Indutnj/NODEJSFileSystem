//console.log("welcome")
const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
   /* res.end(JSON.stringify({
        title:"Nodejs",
        content:"My First API"
    }))*/
   /* fs.readFile('hello.txt','utf-8',(error,data)=>{
        if(error)
            console.log(error)
        else
            res.end(data)
    })*/
    let file_name=+new Date();
    console.log(file_name)
    fs.writeFile(`files/${file_name}.txt`,`${new Date()}`,'utf-8',()=>{
        fs.readFile(`files/${file_name}.txt`,'utf-8',(error,data)=>{
            if(error)
                console.log(error)
            else
                res.end(data)
        })
    })
})
server.listen(8000,()=>console.log("Server is Listining"))