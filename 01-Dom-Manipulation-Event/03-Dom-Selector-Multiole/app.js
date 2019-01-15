console.clear();

// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[1].style.color = 'red';
items[3].textContent = 'red';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[2].style.color = 'yellow';
lis[2].textContent = 'Yellow';

// Conver HTML COLLECTION in Array
lis = Array.from(lis);
lis.reverse();
lis.forEach((li, index) => {
    ( index % 2 === 0 ) ? li.style.background = '#ccc' : li.style.background = '#f4f4f4';
});
console.log(lis);

// document.querySelectorAll()
const qAll = document.querySelectorAll('ul.collection li.collection-item');
console.log(qAll);

qAll.forEach((li, index) => {
    li.style.background = '#fff'
});
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4'
}