var mNumber = require('./randomNumber');
var money = require('./money');

exports.amount = function (){
  return (money(mNumber()));
};
exports.account = function (){
  return "Account balance: \n"
};
