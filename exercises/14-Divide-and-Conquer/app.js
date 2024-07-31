let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
let odd
function mergeTwoList(array){
    let odd = [];
    let even = [];
    
    for (let number of array) {
        if (number % 2 === 0) {
            even.push(number);
        } else {
            odd.push(number);
        }
    }
    
    return odd.concat(even);
}