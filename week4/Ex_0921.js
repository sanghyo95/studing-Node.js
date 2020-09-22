// // 파일을 직접 열고 데이터 쓰기
// var fs = require("fs");
// fs.open("./out.txt", "w", function (err, fd) {
//   if (err) throw err;
//   var buf = new Buffer("안녕!\n");
//   fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
//     if (err) throw err;
//     console.log(err, written, buffer);

//     fs.close(fd, () => {
//       console.log("파일 열고 데이터 쓰고 파일 닫기 완료");
//     });
//   });
// });

// 버퍼 사용하기
var output = "hi 1";
var buffer1 = new Buffer(10);
var len = buffer1.write(output, "utf8");
console.log("첫 번째 버퍼의 문자열 : %s", buffer1.toString());

var buffer2 = new Buffer("Hi 2 ", "utf8");
console.log("두 번째 버퍼의 문자열 :%s", buffer2.toString());

console.log("버퍼 객체 타입:%s", Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(output);

var str1 = buffer1.toString("utf8", 0, byteLen);
var str2 = buffer2.toString("utf8");

buffer1.copy(buffer2, 0, 0, len);

console.log("두 번째 버퍼에 복사한 후의 문자열:%s", buffer2.toString("utf8"));
