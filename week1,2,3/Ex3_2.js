var fs = require("fs");

var data = fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return console.log("error");

  console.log(data);
  return data;
  
});

var fs = require('fs');
  fs.writeFile('other.txt',data,'utf8',(error)=>{
      if(error) return console.log(error);

      console.log("FILE WRITE COMPLETE");
  });

