const { taxCalc, currencyFormat, thresholdCalc } = require("./util");

const taxRate = 0.14;
const phonePrice = 20;
const accessoryPrice = 5;
const thresholdRate = 0.8;
let balance = 100;
const allowedBalance = thresholdCalc(balance, thresholdRate);
let errMsg = "";
let Msg = "";

if (balance > phonePrice) {
  let phonesCount = 0;
  let accessoryCount = 0;
  let totalPrice = 0;
  let totalWithTax = taxCalc(totalPrice, taxRate);

  while (totalPrice < allowedBalance) {
    if(totalPrice + phonePrice > allowedBalance)
    break
    console.log(allowedBalance);
    totalPrice += phonePrice;
    phonesCount++;
    totalPrice += accessoryPrice;
    accessoryCount++;
    console.log(totalPrice);
  }
  if (balance >= totalWithTax) {
    balance -= totalPrice;
    Msg = `Congoratulations on your ${currencyFormat(totalWithTax)} purchase,
    You purchased ${phonesCount} Phones and ${accessoryCount} Accessories, 
    Your Current Balance is ${currencyFormat(balance)}`;
  }
  console.log(phonesCount);
  console.log(accessoryCount);
} else {
  errMsg = "your balance can not buy even one phone!!";
}

console.log(errMsg);
// console.log(currencyFormat(2.589));
// console.log(taxCalc(100, taxRate));
// console.log(thresholdCalc(100, thresholdRate));
