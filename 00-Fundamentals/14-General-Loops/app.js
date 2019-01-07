console.clear();
// FOR LOOP
for (let i = 0; i < 10; i++) {
    console.log(`FOR: ${i}`);
    if (i === 2) {
        console.log('2 is my favorite number');
    }

    if (i === 5) {
        console.log('Stop the loop');
        break;
    }
}

console.log('\n\n');

// WHILE LOOP
let w = 0;
while (w < 10) {
    console.log('While: ' + w);
    w++;
}

console.log('\n\n');

// DO WHILE
let d = 100;
do {
    console.log(`DO WHILE: ${d}`);
    d++;
}
while (d < 10);

console.log('\n\n');

// LOOP TO ARRAYS
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('\n\n');
cars.forEach(function (car) {
    console.log(car);
});

console.log('\n\n');

// MAP
const users = [{
        id: 1,
        name: 'Leo',
        age: 36,
        address: {
            street: 'Rua Belgica',
            number: 128,
            complements: 'Casa 3'
        }
    },
    {
        id: 2,
        name: 'Pri',
        age: 36,
        address: {
            street: 'Rua Belgica',
            number: 128,
            complements: 'Casa 3'
        }
    },
    {
        id: 3,
        name: 'Karen',
        age: 36,
        address: {
            street: 'Rua Belgica',
            number: 128,
            complements: 'Casa 3'
        }
    }
];
const ids = users.map(function (user) {
    return user.address.street;
});
console.log(ids);
console.log('\n\n');
cars.forEach(function (car, index, array) {
    console.log(`${index}: ${car}`);
    console.log(array);
});

console.log('\n\n');

//FOR IN
const person = {
    firstName: 'Leo',
    lastName: 'Cardoso',
    idade: 36
}
for(let x in person){
    console.log(`fOR IN -> ${x}: ${person[x]}`);
}