const palindromes = function (input) {
    let startIndex = 0
    let endIndex = input.length - 1

    while (startIndex <= endIndex) {
        // make sure that checked chars are valid
        while (!/^[a-zA-Z]$/.test(input.charAt(startIndex) && Number.isInteger(input.charAt(startIndex)))) {
            startIndex ++
        }
        while (!/^[a-zA-Z]$/.test(input.charAt(endIndex) && Number.isInteger(input.charAt(endIndex)))) {
            endIndex --
        }

        if (input.charAt(startIndex) != input.charAt(endIndex)) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
