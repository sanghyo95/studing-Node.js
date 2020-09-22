// var fs = require('fs');

// var text = fs.readFileSync('textfile.txt','utf8');
// console.log(text);

// var fs = require('fs');
// fs.readFile('textfile.txt','utf8',function(error,data){
//     console.log(data);
// });

// console.log('******************');
// console.log('++++++++++++++++++');

// var data = "Hello world ~~! Just do it";
// var data2 = "Hello world ~~! Just do it soon it shall also come to pass";

// fs.writeFile('write.txt',data,'utf8',function(error){
//     console.log('write file asynch completed~!\n\n\n    ');
//     console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
// });

// fs.writeFileSync('write2.txt',data2,'utf8');
//     console.log("i'm write2 ~");

// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

var fs = require("fs");

fs.readFile("textfile.txt", "utf8", (error, data) => {
  if (error) return console.log(error);

  console.log(data);
});

fs.writeFile("textfile.txt", "Hello World .. ! ", "utf8", (error) => {
  if (error) return console.log(error);

  console.log("FILE WRITE COMPLETE");
});
