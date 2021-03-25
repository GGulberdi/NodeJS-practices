var slugify = require('slugify')

const text1=slugify('some string some string 12041 Carolanne Turnpike')

const text2=slugify('some string some string 12041 Carolanne Turnpike','*')

console.log(text1);
console.log(text2);
//console.log(text1,text2);
