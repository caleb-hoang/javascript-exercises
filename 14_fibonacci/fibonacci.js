const fibonacci = function(index) {
    let sum = 0
    for (let i = 1; i <= index; i ++) {
        sum += i
    }
    return sum 
};

// Do not edit below this line
module.exports = fibonacci;
