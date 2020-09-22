// 1번 문제 
function sayHello() {
    console.log('hello World');
}

function sayHi() {
    console.log("Hi World");
}

setTimeout(sayHello,3000);

var t = setTimeout(sayHi,2*1000);

console.log('the end');

// 실행 순서 예상
// the end --> Hi World -> hello World 

// 2번 문제
var fs = require("fs");

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return console.log("error");

  console.log(data);  
});

var fs = require('fs');
fs.readFile("data.txt","utf8",(error,data)=>{
  if(error) return console.log("Read error");
  fs.writeFile('other.txt',data,'utf8',(error)=>{
    if(error) return console.log(error);
    console.log("File Write Complete");
  })
})
 

