arr = [35,67,98,76,56]

function squareroot(val) {
    val1 = Math.sqrt(val)
    return val1
}

for(let i = 0;i<arr.length;i++) {
    let a = squareroot(arr[i])
    console.log(a)
}

mp = arr.map(Math.sqrt)
console.log(mp)