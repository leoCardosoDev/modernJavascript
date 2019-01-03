// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const nums = [9, 8, 17, 43, 56, 33, 23, 44, 36, 5, 67, 79, 55, 99];
const numbers2 = new Array(22, 25, 33, 76, 54);
const fruit = ['Orange', 'Banana', 'Pear', 'Apple'];
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];

let val;
//console.clear();

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[1] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 3);
// Reverse
numbers.reverse();
// Add on to end
numbers.push(250);
// Add on to start
numbers.unshift(450);


// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function (x, y) {
    return x - y;
});

// Reverse sort
val = numbers.sort(function (x, y) {
    return y - x;
});

// Find
function under50(num) {
    return num < 50;
}

function over50(num) {
    return num > 50;
}

val = nums.find(under50);
//val = nums.find(over50);

//console.table(numbers);
console.log(val);