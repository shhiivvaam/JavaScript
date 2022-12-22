obj = {
    "Name" : "User",
    "Roll No" : 123,
    "Batch" : "MERN"
}

console.log(obj)

jsonobj = JSON.stringify(obj) // to make an obj to JSON obj
console.log(jsonobj)

simpleobj = JSON.parse(jsonobj) // to make from JSON to object 
console.log(simpleobj)

// secondobj = JSON.parse(obj)                 // galat hai
// console.log(secondobj)