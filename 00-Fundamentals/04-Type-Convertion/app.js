let valString;
console.clear();

// 1. Number to string
valString = 5;
valString = String(5);
valString = String(5 + 5);

// 1.a. bool to string
valString = String(true);

// 1.b. Date to string
valString = String(new Date());

// 1.c. Array to string
valString = String([1, 2, 3, 4, 5, 6]);

// Função toString()
valString = (5).toString();
valString = (['arroz', 'feijão', 'bisteca', 'salada']).toString();

// Output
console.log(valString);
console.log(typeof valString);
console.log(valString.length);

let valNumber;
// 2. String to number
valNumber = Number('5');
// 2.a bool to number
valNumber = Number(true);
valNumber = Number(false);
// 2.b null to number
valNumber = Number(null);

// Função parseInt
valNumber = parseInt('100.99');
// Função parseFloat
valNumber = parseFloat('100.99')


// Output
console.log(valNumber);
console.log(typeof valNumber);
console.log(valNumber.toFixed());

const val1 = (5).toString();
const val2 = 6;
const sum = Number(val1) + val2;
console.log(sum);
console.log(typeof sum);