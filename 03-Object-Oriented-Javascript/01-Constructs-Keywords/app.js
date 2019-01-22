console.clear()
// Person constructor
function Person(name, dob) {
    this.name = name
    //this.age = age
    this.birthday = new Date(dob)
    this.calculateAge = () => {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

//const leo = new Person('Leo', 37)
//const pri = new Person('Pri', 29)
//console.log(leo)

const leo = new Person('Leo', '1-01-1982')
console.log(leo.calculateAge())