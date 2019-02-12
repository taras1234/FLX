const formatTime = function(arg){
  let day = Math.floor(arg/(60*24));
  let hour = Math.floor(arg % (60*24)/60);
  let min = Math.floor(arg % 60);
  return `${day} day's ${hour} hour's ${min} minutes`
}
formatTime(120);
formatTime(3601);