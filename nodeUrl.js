var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);
console.log(url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160',true));
console.log(querystring.parse(parsedObject.query));