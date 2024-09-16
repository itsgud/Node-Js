// Create Web Server - http Module
import http from 'http';

const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');  
    res.end('Response from Server 1jkj jk kkk '); 
});

server.listen(8000,'localhost',()=>{
    console.log('Sever Running at http://localhost:8000/');
});