const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        older = calculateAge(oldest) > calculateAge(person)
        if (older) {
            return oldest
        } else {
            return person
        }
    }, people[0])
};

function calculateAge(person) {
    let birth = person.yearOfBirth
    let death = person.yearOfDeath

    if (isNaN(death)) {
        death = 2025
    }

    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
