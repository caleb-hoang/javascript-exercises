const repeatString = function(string, num) {
    let returnVal = ""
    if (num < 0) {
        return "ERROR";
    }
    for(let i = 0; i < num; i++) {
        returnVal = returnVal.concat(string)
    }
    return returnVal
};

// Do not edit below this line
module.exports = repeatString;
