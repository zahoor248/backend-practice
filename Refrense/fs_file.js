const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, '/test'), {}, err=>{
//     if (err) throw err ;
//     console.log('folder creating')
// })

// crete and write to file

// fs.readFile(path.join(__dirname, "/test", "helo.txt"), 'utf8' ,(err,data) => {
//   if (err) throw err;
//   console.log(data,"file  creating");
// });
fs.writeFile(path.join(__dirname,'/test', 'HTTP_demo.js'), 'const url = require', (err)=>{
    if(err) throw err
    console.log('url file created')
})