const fs=require('fs');

//Blocking Syncronous
// const textIn=fs.readFileSync('./txt/index.txt','utf-8');
// console.log(textIn);

// const textOut=`This is whar we know:${textIn}\nCreated on  ${Date.now()}`; //Join two String;
// fs.writeFileSync('./txt/index.txt',textOut);
// console.log('File written!');

//Asyncronous way
fs.readFile('./txt/read.txt','utf-8',(err,data1)=>{
    if(err) return console.log(err);
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        if(err) return console.log(err);
        console.log(data2);
        fs.writeFile('./txt/final.txt',`${data1}\n${data2}`,'utf-8',(err)=>{
            console.log("your file has been written");
        })
    });
}); 

console.log("read first");