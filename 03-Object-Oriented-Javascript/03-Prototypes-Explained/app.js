console.clear()
// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
    /* this.calculate = () => {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    } */
}

// Calculate Age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
// Get Full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getMaried = function(newLastName){
    this.lastName = newLastName
}

const leo = new Person('Leo', 'Silva', '01-09-1982')
const pri = new Person('Pri', 'Cardoso', '01-05-1990')

console.log(pri)
console.log(leo.calculateAge())
console.log(pri.getFullName())
leo.getMaried('Cardoso de Oliveira')
console.log(leo.getFullName())

console.log(pri.hasOwnProperty('firstName'))
console.log(pri.hasOwnProperty('getFullName'))