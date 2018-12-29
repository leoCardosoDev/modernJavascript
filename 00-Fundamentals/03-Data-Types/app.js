/*
    PRIMITIVE DATA TYPES
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbols (ES6)

    REFERENCE DATA TYPES
    1. Arrays
    2. Object Literal
    3. Functions
    4. Dates
    5. Anything Else
*/
console.clear();

/***    PRIMITIVE DATA TYPES    ***/
// 1. STRING
const name = 'Leo Cardoso';
console.log(name, ' = ', typeof name);

// 2. NUMBER
const age = 36;
console.log(age, ' = ', typeof age );

// 3. BOLLEAN
const hasKid = true;
console.log(hasKid, ' = ', typeof hasKid);

// 4. NULL
const car = null;
console.log(car, ' = ', typeof car );

// 5. UNDEFINED
let wife;
console.log(wife, ' = ', typeof wife );
let house = undefined;
console.log(house, ' = ', typeof house);

// 6. SYMBOL
const sym = Symbol();
console.log(sym, ' = ', typeof sym);

/***    REFERENCE DATA TYPES - OBJECT   ***/
// 1. ARRAY
const hobbies = ['movies', 'music'];
console.table(hobbies);
console.log(' = ', typeof hobbies);

// 2. OBJECT LITERAL
const address = {
    city: 'Barueri',
    state: 'SP'
};
console.table(address);
console.log(' = ',typeof address);

// 3. FUNCTIONS
const task = function(){
    return "Caminhar"
}
console.log(typeof task);

// 4. DATE
const today = new Date();
console.log(today);
console.log(typeof today);