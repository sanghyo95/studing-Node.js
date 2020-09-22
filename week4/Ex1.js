// ex1

// function sayHello() {
//   console.log("hello world");
// }

// function sayHi() {
//   console.log("hi world");
// }

// // setTimeout(sayHello, 3000);

// // var t = setInterval(sayHi, 2000);


// //ex 2
// function sayGoodbye(){
//   console.log("Good bye");
// }

// setInterval(sayGoodbye,2000);
// setInterval(sayHello,4000);


//ex 3
// function sayGoodbye(who){
//   console.log("Good bye"+who);
// }
// setInterval(sayGoodbye,2000,"friend");



// setInterval(function sayGoodbyeCallBack(who){
//   console.log("Good bye",who);
// },2000,'friend2');

//ex4
var fs = require('fs');
var fs2 = require('fs');
var fs3 = require('fs');

// fs.open("./data1.txt",'r',function(err,fd){
//   if(err) throw err;
//   var buf = new Buffer(200);
  
//   fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
//     if(err) throw err;
    
//     var inStr = buffer.toString('utf8',0,bytesRead);
    
//     console.log(inStr);
//     fs.close(fd,function(){
//       console.log("data1.txt close");
//     })
//   });
// });

// fs2.open("./data2.txt",'r',function(err,fd){
//   if(err) throw err;
//   var buf = new Buffer(200);
//   fs2.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
//     if(err) throw err;
//     var inStr = buffer.toString('utf8',0,bytesRead);
//     console.log(inStr);
//     fs2.close(fd,function(){
//       console.log("data2.txt close");
//     })
//   });
// });


var fd = fs.openSync('data1.txt','r');
var fd2 = fs2.openSync('data2.txt','r');


var buffer = new Buffer(210);
var buffer2 = new Buffer(76);



fs.readSync(fd,buffer,0,buffer.length,0);
fs2.readSync(fd2,buffer2,0,buffer2.length,0);
var buffer3 = Buffer.from(buffer.toString('utf-8')+buffer2.toString('utf-8'));


// // console.log('Fille Contents',buffer.toString('utf-8'));

var fd3 = fs3.openSync('data3.txt','w');

fs3.writeSync(fd3,buffer3,0,buffer3.length,0);



fs.closeSync(fd);
fs2.closeSync(fd2);
fs3.closeSync(fd3);
