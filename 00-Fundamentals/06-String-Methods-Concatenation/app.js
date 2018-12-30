const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const img = 'fgfdghfdhfdhjuiuyiyhuehuejfe8u49894jknvjhrjfguir4j8i08u8.png';
const str = 'Hello there my name is ' + firstName + ' ' + lastName + '. I\'am ' + age;
const tags = 'web, web design, web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I cant\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase() + ' ' + lastName.toLowerCase();

val = firstName[2].toUpperCase();

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('3');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4)

val = img.slice(-4);

// split()
val = str.split(' ');
console.table(val);

val = tags.split(',');
console.table(val);

// replace
val = str.replace(firstName, 'Jack');

// includes()
val = str.includes('foo');


console.log(val);