// Routing and serving HTML pages in Node js
import http from 'http';
import fs from 'fs';
const server=http.createServer((req,res)=>{
    res.writeHead(200,"OK",{ 'Content-Type':'text/html' })
    //res.end('<h1> Home Page </h1> '); 
//     if(req.url=='/')
//         res.end('<h1> Home Page </h1> '); 
//    else  if(req.url=='/about')
//         res.end('<h1> About Page </h1> '); 
//     else if(req.url=='/contact')
//         res.end('<h1> Contact Us  Page </h1> '); 
//     else
//       res.end('<h1> 404 Page not found </h1>');
    

if(req.url=='/')
{
    fs.readFile('./public/home.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
    
}
     
else  if(req.url=='/about')
{
    fs.readFile('./public/about.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
}
else if(req.url=='/contact')
    res.end('<h1> Contact Us  Page </h1> '); 
else
  res.end('<h1> 404 Page not found </h1>');

         
});

server.listen(8000,'localhost',()=>{
    console.log('Sever Running at http://localhost:8000/');
});