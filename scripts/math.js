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

module.exports = { toEight, toTwo, days }
