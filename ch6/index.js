// File System - Promise API
//const fs=require('fs/promises');

import * as fs from 'fs/promises'

// // Creating Directory - Path should be there
// try
// {
//       await fs.mkdir('geek')
//       console.log("directory Created...");

// }
// catch(error)
// {
//     console.log(error);
// }

// Creating Directory - Path is not required to be there
// try
// {
//       await fs.mkdir('test/demo',{recursive:true})
//       console.log("directory Created...");

// }
// catch(error)
// {
//     console.log(error);
// }
//Read Content of Directory
try
{
     const files= await fs.readdir('test\\demo')
     for(const file of files)
          console.log(file);
      console.log("directory readdd...");
}
catch(error)
{
    console.log(error);
}