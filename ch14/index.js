// Create Web Server - http Module
import http from 'http';

const server=http.createServer((req,res)=>{
    // Request
    console.log(req.url);
    res.writeHead(202,"Good",{'content-Type':'text/plain'});
    //res.setHeader('content-type','text/plain');  
    res.end('Response from Server 1 kk '); 
});

server.listen(8000,'localhost',()=>{
    console.log('Sever Running at http://localhost:8000/');
});