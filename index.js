const calculate = (input) => {
  let calculations = [];

  for (let index = 0; index < input.length; index++) {
    const currentIndex = input[index];

    if (isValid(currentIndex)) {
      calculations.push(currentIndex);
    } else if (currentIndex === null) {
      calculations.push(0);
    }
  }
  if (calculations.length !== 3) {
    return NaN;
  }

  return perfCalculation(calculations);
};
const perfCalculation = (incomingCalcs) => {
  switch (incomingCalcs[1]) {
    case "+":
      return Number(incomingCalcs[0]) + Number(incomingCalcs[2]);
    case "-":
      return Number(incomingCalcs[0]) - Number(incomingCalcs[2]);
    case "*":
      return Number(incomingCalcs[0]) * Number(incomingCalcs[2]);
    case "/":
      return Number(incomingCalcs[0]) / Number(incomingCalcs[2]);

    default:
      return NaN;
  }
};
const isANumber = (number) => {
  if (!isNaN(number) && number !== "") {
    return true;
  }
  return false;
};
const isValid = (operator) => {
  const validOperators = ["+", "-", "*", "/"];

  if (validOperators.includes(operator) || isANumber(operator)) {
    return true;
  }

  return false;
};
module.exports = calculate;
