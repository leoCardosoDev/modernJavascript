// SETs - Store unique values of any type

const set = new Set()

// Add values to set
set.add(100)
set.add('A string')
set.add({name: 'Leo Cardoso'})
set.add(true)
console.log(set)

const set1 = new Set([200, true, 'string', {name: 'Pri Cardoso'}])
console.log(set1)

console.clear()

// Get count
console.log(set.size)

// Check for values
console.log(set.has(100))
console.log(set.has(50+50))
console.log(set.has({name: 'Leo Cardoso'}))

console.clear()
// Delete form set
set.delete(100)
console.log(set)

console.clear()
// ITERATING THROUGH SETS

// for...of
for(let item of set1){
    console.log(item)
}
for (let item of set1.values()){
    console.log(item)
}
console.clear()
for(let item of set1.entries()){
    console.log(item)
}

console.clear()
// Foreach Loop
set1.forEach( (value) => {
    console.log(value)
})

console.clear()
// CONVERT TO ARRAY
const setArr = Array.from(set1)
console.log(setArr)
