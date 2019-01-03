//Function declarations
console.clear();

function greet() {
    console.log('Hello World!!');
}
greet();

function olaMundo() {
    return 'Olá mundo';
}
console.log(olaMundo());

function iName(firstname) {
    return 'Hello ' + firstname;
}
console.log(iName('Leonardo'));

function firstLastName(firstname, lastname) {
    return 'Hello ' + firstname + ' ' + lastname;
}
console.log(firstLastName('Leo', 'Cardoso'));

// Function express
const square = function (x = 3) {
    return x * x;
}
console.log(square());
console.log(square(4));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS IIFEs
(function(){
    console.log('IIFEs run...');
})();
(function(name){
    console.log('Hello '+ name);
})('Leo Cardoso');

// PROPERTY METHODS
const todo = {
    create: function(){
        console.log('Add todo...');
    },
    read: function(){
        console.log('Read todo List');
    },
    update: function(id){
        console.log(`Edit todo ${id}`);
    },  
    del: function(id){
        console.log(`Remove todo ${id}`);
    }
}

todo.create();
todo.read();
todo.update(5);
todo.del(2);

console.table(todo);