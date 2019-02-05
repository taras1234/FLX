const a = parseFloat(prompt('please enter a number a'));
const b = parseFloat(prompt('please enter a number b'));
const c = parseFloat(prompt('please enter a number c'));
let discr = (b * b) - (4 * a * c); 
var sqrDiscr = Math.sqrt(discr);
if(isNaN(a)||isNaN(b)||isNaN(c) || a===0){
    alert('Invalid input data')
} else if(discr<0){
    alert('no solution')
} else if(discr===0){
    const x3 = -b/(2*a);
    alert(x3);
} else if(discr>0 ){
    const x1= (-b-sqrDiscr)/(2*a);
    const x2= (-b+sqrDiscr)/(2*a);
    alert(x1);
    alert(x2);
}