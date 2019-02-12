const isBigger = function(a,b){
  return a > b;
}
const isSmaller = function(a,b){
  return !isBigger(a,b);
}
isSmaller(5,-1);