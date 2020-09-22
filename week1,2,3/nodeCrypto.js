var crypto = require('crypto');

// var shasum = crypto.createHash("sha256").update("crypto_hash").digest("hex");

// console.log("crpyto_hash : ", shasum);


var key = "아무도 읽지 못하는 나만의 비밀 키";
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes-256-cbc,key');
cipher.update(input,'utf8','base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes-256-cbc',key);
decipher.update(cipheredOutput,'base64','utf8');
var decipheredOutput = decipher.final('utf8');

console.log(input);
console.log(cipheredOutput);
console.log(decipheredOutput);