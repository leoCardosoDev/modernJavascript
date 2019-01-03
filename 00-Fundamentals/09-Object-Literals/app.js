const person = {
    firstName: 'Leo',
    lastName: 'Cardoso',
    age: 37,
    email: 'leocardosodev@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Barueri',
        states: 'São Paulo',
        country: 'Brasil',
        logradouro: {
            rua: 'Bélgica',
            num: 129,
            complemento: 'Casa 3'
        }
    },
    getBirthYear: function () {
        return 2019 - this.age;
    }
}
let val;

// Get specific value
val = person.firstName;
val = person['firstName'];

val = person;
val = person.hobbies;
val = person.hobbies[1];

val = person.address;
val = person.address.city;
val = person.address.logradouro;
val = person.address.logradouro.rua;

val = person.getBirthYear();

console.clear();
console.log(val);
console.table(val);

const people = [{
        name: 'Leo Cardoso',
        age: 37
    },
    {
        name: 'Pri Cardoso',
        age: 29
    },
    {
        name: 'Julia Cardoso',
        age: 2
    },
];
for (let i = 0; i < people.length; i++) {
    //console.log(people[i]);
    console.log(people[i].name);
}