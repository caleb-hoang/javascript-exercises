const removeFromArray = function(items) {
    let args = Array.prototype.slice.call(arguments, 1)
    
    for(let i = 0; i < items.length; i++) {
        if (args.includes(items[i])) {
            items.splice(i, 1)
            i--
        }
    }
    return items    
};

// Do not edit below this line
module.exports = removeFromArray;
