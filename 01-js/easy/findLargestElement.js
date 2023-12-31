/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
  - Play with input for more learning and now try to create a function to find smallest element.
*/ 
let numbers=[5,6,9,5,3];


function findLargestElement(numbers) {
    var big=numbers[0];
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]>big)
        big=numbers[i];
    }
    return big;
}

console.log(findLargestElement(numbers));