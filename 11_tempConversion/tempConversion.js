const convertToCelsius = function(temp) {
    let untruncated = (temp - 32) * 5 / 9
    let truncated = Math.round(Math.trunc(untruncated * 100) / 10) / 10
    return truncated
};

const convertToFahrenheit = function(temp) {
    let untruncated = (temp * 9 / 5) + 32
    let truncated = Math.round(Math.trunc(untruncated * 100) / 10) / 10
    return truncated
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
