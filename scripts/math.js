function toEight(number){
  return (number).toString(8);
}

function toTwo(number){
 return (number).toString(2);
}

function days(before, after) {
var dayBegin = new Date(before);
var dayAfter = new Date(after);
return Math.round((dayAfter - dayBegin) / (1000 * 60 * 60 * 24))
}

function neutral(boolean, number) {
  if(boolean == true && number == 0) return console.log('This is not a 自然数 (neutral number)');
  if(boolean == false)return console.log('This is a 自然数 （neutral number)');
  return console.log('Please provide a number and an option');
}

module.exports = { toEight, toTwo, days, neutral }
