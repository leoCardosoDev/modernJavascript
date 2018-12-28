console.clear();
//var, let, const

//Init var
var greeting;
console.log(greeting);
//Attr value
greeting = 'Hello';
console.log(greeting);

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//letters, numbers, _, $

// 1. Não pode começar com numero
// var 1name = "João";
var $name = 'João'; // Não recomendado
console.log($name);
var _name = 'Maria'; // Uso recomendado para variaveis private(OO)
console.log(_name);
var Name = 'José'; // Não recomendado para váriaveis (OO)
console.log(Name);
console.log(name);

// 2. Declaration recommended
    // 2.1 Camel Case
    var firstName = 'Ana';
    console.log(firstName);
    // 2.2 Underscore
    var fisrt_name = 'Paula';
    console.log(fisrt_name);
    // 2.3 Pascal Case
    var FirstName = 'Leo';
    console.log(FirstName);
    // 2.4 Normal lowercase
    var firstname = 'Ana Paula';
    console.log(firstname);

// LET
let lastName = 'Silva';
console.log(lastName);

// CONST
const nascimento = '09/01/1982';
console.log(nascimento);
// can not reassign
//nascimento = '05/01/1990'

const person = {
    name: 'Leonardo',
    idade: 36
};

person.name = 'Priscila';
person.idade = 28;
person.nasc = '05/01/1990';
console.table(person);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.table(numbers);
numbers.push(10);
numbers.unshift(0);
//numbers = [1, 2, 3, 4, 5]
console.table(numbers);
