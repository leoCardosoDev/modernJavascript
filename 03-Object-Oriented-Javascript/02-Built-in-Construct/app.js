console.clear()
// String
const name1 = 'Jeff'
const name2 = new String('Leo')
console.log(name1)
name2.foo = 'bar'
console.log(name2)
console.clear()
console.log(typeof name2)

for (let i = 0; i < name2.length; i++) {
    console.log(name2[i])
}

if (name2 === 'Leo') {
    console.log('YES')
} else {
    console.log('NO')
}

console.clear()
// number
const num1 = 5
const num2 = new Number(5)


// Boolean 
const bool1 = true
const bool2 = new Boolean(true)

// Function
const getSum1 = function (x, y) {
    return x + y
}

const getSum2 = new Function('x', 'y', 'return x + y')
console.log(getSum2(4, 2))

// Object
const jonh = {
    name: 'John'
}
const jonh2 = new Object({
    name: 'John'
})

// Arrays
const arr1 = [1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4, 5)

// Regular Expressions
const re1 = /\w+/
const re2 = new RegExp('\\w+')

console.log(re2)