console.clear()
const sayHelloNormal = function () {
    console.log('Hello World Normal')
}

const sayHelloArrow = () => {
    console.log("Hello World Arrow")
}

const sayHelloArrowInline = () => console.log('Hello World Arrow Function Inline')

const sayHelloReturnInline = () => 'Hello World Arrow Returns not declaration'

const sayHelloArrowObject = () => ({
    msg: 'Hello World Object Literals'
})
let obj = sayHelloArrowObject()

// Single Param
const sayHelloArrowParam = name => console.log(`Hello World Paramns ${name}`)

// Multi Paramns
const sayHelloArrowParamns = (firstName, lastName, age) => console.log(`Hello World I am ${firstName} ${lastName}, age: ${age}`)

const users = ['Leo', 'Pri', 'Júlia']
const nameLengthsNormalCallBack = users.map(function (name) {
    return name.length
})
/*
for(let i = 0; i < users.length; i++){
    numLetters = users[i].length
    console.log(`O nome ${users[i]} tem ${numLetters} letras`)
}
*/
const nameLengthsArrowCallBack = users.map(name => name.length)


sayHelloNormal()
sayHelloArrow()
sayHelloArrowInline()
console.log(sayHelloReturnInline())
console.log(sayHelloArrowObject())
console.log(obj.msg)
sayHelloArrowParam('Leo')
sayHelloArrowParamns('Leo', 'Cardoso', 37)

console.log(nameLengthsNormalCallBack)
console.log(nameLengthsArrowCallBack)