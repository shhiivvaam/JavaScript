let arr = []

arr.push("Shivam")

console.log(arr)

arr.push("Somya")
arr.push("Surbhi")
arr.push("Shachi")
arr.push("Rajesh")
arr.push("Shristi")
arr.push("Shikha")

console.log(arr)

console.log(arr.slice(0,7))

console.log(arr[0])

console.log(arr)

for(let x in arr) {
    console.log(arr)
}

ar = arr.slice(0,1)
console.log(ar)
console.log(arr)




arr = []

arr = [35,67,98,76,56]

function average(val1,val2) {
    let val = val1/val2;
    console.log("the average will be : ",val)
}

let count = 0;
let sum = 0;

for(let i = 0;i<arr.length;i++) {
    sum += arr[i];
    count++;
}

average(sum,count)