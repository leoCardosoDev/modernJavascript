console.clear()
const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName
    }
}

const pri = Object.create(personPrototypes)
pri.firstName = 'Pri'
pri.lastName = 'Cardoso'
pri.age = 30

pri.getsMarried('Cardoso de Oliveira')

console.log(pri)
console.log(pri.greeting())

const leo = Object.create(personPrototypes, {
    firstName: {value: 'Leo'},
    lastName: {value: 'Silva'},
    age: {value: 37}
})
leo.getsMarried('Cardoso de Oliveira')

console.log(leo)
console.log(leo.greeting())