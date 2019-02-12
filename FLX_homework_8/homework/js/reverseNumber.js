const reverseNumber = function(rev){
let num = rev.toString().split('').reverse().join('');
return Math.sign(rev)*parseFloat(num);
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);