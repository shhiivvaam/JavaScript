data = require("/Users/Shivam Kumar/OneDrive/Desktop/MERN Course/JavaScript/JavaScript Basics/json files/new.json")
for(let i = 0;i<data.length;i++) {
    console.log(i," : ",data[i])
    if(data[i].Backcamera ==  true) {
        console.log(data[i].name)
    }
}