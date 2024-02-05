// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let position = 7;
// let element = 100;



// for (let j = arr.length; j >= position; j--) {
//     arr[j] = arr[j - 1];

// }
// arr[position - 1] = element;
// console.log(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let position = 9;

for (let j = position; j < arr.length; j++) {
    arr[j] = arr[j + 1];

}
arr.length = arr.length - 1;
console.log(arr);