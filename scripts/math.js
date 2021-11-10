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

function isPrime(num = 0) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return "This isn't a prime number 质数";
  return (num > 1) ? "This is a prime number 质数": "This isn't a prime number 质数";
}

function sRoot(num = 0) {
  return Math.sqrt(num);
}

// 质数
function primeFactor(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
    if(!factors.includes(divisor)){  factors.push(divisor); }
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

// 因数
function divisor(num) {
var divisorsList = [];
var divisors = (n)=>[...Array(n+1).keys()].slice(1)
       .reduce((s, a)=>{
          var divisor = !(n % a) && a;
          if (divisor) divisorsList.push(divisor);
        //  return s+divisor;
       }, 0);
  divisors(num);
  return divisorsList;
}
module.exports = { toEight, toTwo, days, neutral, isPrime, sRoot, primeFactor, divisor }
