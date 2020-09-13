var url = require('url');
var querystring = require('querystring');


// url module use querystring
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160',true);

console.log(parsedObject);
