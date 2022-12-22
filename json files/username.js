let a = "Shivam_Kumar_Singh"
let b = a.split("_")

let username = b[2]+123

console.log(username)

// let map = b.map((a,b)=> {return b + a})

let map = b.map((a,b)=> {console.log("Key : ",b)
    console.log("i : ",a)
})
console.log(map)