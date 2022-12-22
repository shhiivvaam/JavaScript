// Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

// And the student have marks in array 
// Ar=[35,67,98,76,56]

// Example
// Student 3 has 98 marks so that student have GradeA+



// } Solution 


arr = [35,67,98,76,56]

function chkgrade(val) {
    if(val>89) {
        return true;
    }
    return false;
}

for(let i = 0;i<arr.length;i++) {
    if(chkgrade(arr[i])) {
        console.log(arr[i]," : is getting A+ Grade");
    }
    else {
        console.log(arr[i]," : is not getting A+ Grade");
    }
}
