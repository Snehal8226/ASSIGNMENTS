
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
 //console.log(moment().weekday(-7));
 //import { upperCase, localeUpperCase } from "upper-case";
 //npm install upper-case --save

//console.log(upperCase("string")); //=> "STRING"
//ISO day of week
console.log(moment().isoWeekday(1)); // Monday
console.log(moment().isoWeekday(7)); // Sunday
console.log(moment().dayOfYear());   //Number
console.log(moment().week()); // Number
//ISO weekof year
console.log(moment().isoWeek());
//Month
console.log(moment().month()); // Number
console.log(moment().month("January"));
//Quarter
console.log(moment().quarter()); // Number
console.log(moment().set({'year': 2013, 'month': 3}));
console.log(moment().set({'year': 2013, 'month': 3, 'dates': 5}));
console.log(moment().set({'year': 2013, 'months': 5, 'dates': 5}));
console.log(moment().set({'year': 2022, 'months': 9, 'dates': 5}));