const leapYears = function(year) {
    let div4 = (year % 4) == 0
    let div10 = (year % 10) == 0
    let div400 = (year % 400) == 0

    if (div4) {
        if (div10) {
            return div400
        } else {
            return true
        }
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
