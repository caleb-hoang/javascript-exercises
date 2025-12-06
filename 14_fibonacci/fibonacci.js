const fibonacci = function(index) {
    let idx = parseInt(index)
    if (idx < 0) {
        return "OOPS"
    }
    let current = 0
    let last = 0
    for (let i = 1; i <= idx; i ++) {
        saveCurrent = current
        if (i == 1) {
            current = 1
        }
        current = current + last
        last = saveCurrent
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
