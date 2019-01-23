console.clear()
// Pesron Constructor

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('Leo', 'Silva')
console.log(person1.greeting())
console.clear()

// customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName)

    this.phone = phone
    this.membership = membership
}
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make custome.prototype return Customer()
Customer.prototype.constructor = Customer

// Customer greeting
Customer.prototype.greeting = function(){
    return `Customer Greeting ${this.firstName} ${this.lastName}`
}

// Create Customer
const customer1 = new Customer('Pri', 'Cardoso', '+55 (55) 55555-5555', 'Standart')
console.log(customer1)
console.log(customer1.greeting())
console.log(person1.greeting())