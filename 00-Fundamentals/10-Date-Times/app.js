let val;
const today = new Date();
const birthday0 = new Date('01-09-1982');
const birthday1 = new Date('01-05-1990 11:25:00');
const birthday2 = new Date('September 08 1953');
const birthday3 = new Date('10/27/1945');


val = today;
val = today.toString();

val = birthday0;
val = birthday1;
val = birthday2;
val = birthday3;

val = today.getMonth(); // 0 - 11
val = today.getDate(); // dia
val = today.getDay(); // Semana 0 - 7
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday0.setMonth(2);
birthday0.setDate(12);
birthday0.setFullYear(1982);
birthday0.setHours(4);
birthday0.setMinutes(25);
birthday0.setSeconds(45);

val = birthday0;

console.clear();
console.log(val);