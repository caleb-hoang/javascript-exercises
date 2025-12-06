const add = function(addendA, addendB) {
  return addendA + addendB
};

const subtract = function(val1, val2) {
  return val1 - val2
};

const sum = function(nums) {
	return nums.reduce((sum, number) => {return sum + number}, 0)
};

const multiply = function(nums) {
  return nums.reduce((product, number) => {return product * number}, 1)
};

const power = function(val1, val2) {
	return Math.pow(val1, val2)
};

const factorial = function(val) {
	let product = 1
  for (let i = val; i > 0; i--) {
    product *= i
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
