var randomNumber = function (min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};
var mNumber = function number(){
return randomNumber(100, 1000000);
};
module.exports = mNumber;
