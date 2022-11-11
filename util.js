const taxCalc = (amount, taxRate) => {
  return amount + amount * taxRate;
};

const currencyFormat = (amount) => {
  return amount.toFixed(2) + "$";
};

const thresholdCalc = (amount, thresholdRate) => {
    return amount * thresholdRate
};

module.exports = {taxCalc, currencyFormat, thresholdCalc};