console.clear()

class Person{
    constructor(firsName, lastName, dob){
        this.firsName = firsName
        this.lastName = lastName
        this.birthday = new Date(dob)
    }
    greeting(){
        return `Hello there ${this.firsName} ${this.lastName}`
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    getsMarried(newLastName){
        this.lastName = newLastName
    }

    static addNumbers(x,y){
        return x+y
    }
}

const pri = new Person('Pri', 'Cardoso', '01-05-1990')
console.log(pri)
console.log(pri.greeting())
console.log(pri.calculateAge())
pri.getsMarried('Cardoso de Oliveira')
console.log(pri.greeting())

console.log(Person.addNumbers(4,7))