console.clear()
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    greeting(msg){
        return `${msg} ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName)

        this.phone = phone
        this.membership = membership
    }

    static getMemberShipCost(){
        return 500
    }
}

const leo = new Customer('Leo', 'Silva', '+55 (11) 94809 0778', 'Gold')
const pri = new Person('Pri', 'Cardoso')

console.log(pri.greeting('My name is'))

console.log(leo.greeting('Hello World. I am'))

console.log(Customer.getMemberShipCost())