
// Math 
const mathFunction = r('https://raw.githubusercontent.com/shortem/functions/main/scripts/math.js');
const toEight = mathFunction.toEight;
math.toEight = toEight; 
const toTwo = mathFunction.toTwo;
math.toTwo = toTwo;
const days = mathFunction.days;
math.days = days;

// Utils
const utilsFunction = r('https://raw.githubusercontent.com/shortem/functions/main/scripts/utils.js');
const mathjs = utilsFunction.math;
utils.math = mathjs;
const moment = utilsFunction.moment;
utils.moment = moment;
utils.bsapi = require('bsapi.js');
utils.kamus = utilsFunction.kamus;
