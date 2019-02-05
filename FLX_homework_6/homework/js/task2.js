let a = parseFloat(prompt('please enter a price '));
let b = parseFloat(prompt('please enter a discount from 0-99'));

if(a>=0 && a<=9999999 && b >= 0 && b <= 9999999 && !isNaN(a) && !isNaN(b)){
  let disc = a * b / 100;
  let lastPrice = a - (a * b / 100);
  a = +a.toFixed(2);
  b = +b.toFixed(2);
  disc = +disc.toFixed(2);
  lastPrice = +lastPrice.toFixed(2);
  alert(
      `Price without discount: ${a} 
      Discount: ${b} % 
      Price with discount: ${lastPrice} 
      Saved: ${disc}`)
} else {
  alert('Invalid input data');
}
