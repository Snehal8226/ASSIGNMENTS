
// var momemt=require('moment')
// console.log(moment().format());

console.log('Hiiiiiiiiii.!!!');



var moment = require('moment'); // require
//console.log(moment().format());


//import moment from 'moment';
//console.log(moment().format());
console.log(moment().millisecond());
console.log(moment().second()); // Number
console.log(moment().minute());

console.log(moment().date()); // Number
//console.log(moment().year(year).month(month).date(day));
console.log(moment().day()); // Number
console.log(moment().day(-7)); // last Sunday (0 - 7)
console.log(moment().day(0));// this Sunday (0)
console.log(moment().day(7));// next Sunday (0 + 7)
console.log(moment().day(10)); // next Wednesday (3 + 7)
console.log(moment().day(24)); // 3 Wednesdays from now (3 + 7 + 7 + 7)
console.log(moment().day("Sunday"));
//this show todays day in number
console.log(moment().weekday());
console.log(moment().weekday());
// when Monday is the first day of the week
//console.log(moment().weekday(0));
//console.log(moment().weekday(-7)); // last Monday
 //console.log(moment().weekday(7)); // next Monday
 console.log(moment().weekday(-7));
