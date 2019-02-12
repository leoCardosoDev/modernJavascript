let re
re = /hello/
re = /hello/g // g = Global Search
re = /hello/i // i = case insensitive

console.log(re)
console.log(re.source)

// exec() - Return result in an array or null
const result = re.exec('hello world')
console.log(result)
console.log(result[0])
console.log(result.index)
console.log(result.input)
console.clear()

// test() - Returns true or false
const resultTest = re.test('Hello')
console.log(resultTest)
console.clear()

// match() - Returns result array or null
const str = 'Hello There'
const resultMatch = str.match(re)
console.log(resultMatch)
console.clear()

// search() - Returns index of the first match if found returns -1
const strs = 'Hello World!'
const resultSearch = strs.search(re)
console.log(resultSearch)
console.clear()

// replace() - Return new string with some or all
const strr = 'Hello There!'
const newstrr = strr.replace(re, 'Hi')
console.log(newstrr)