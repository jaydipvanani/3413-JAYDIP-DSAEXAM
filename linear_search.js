let arr = [12, 23, 45, 67, 11, 18, 90, 18, 23, 7, 52];
let value = 52;


function search(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
        
    }
    return false;

}
let result = search(arr, value);

if (result == false) {
    console.log("Value is not in array");
}
else {
        console.log("value is "+result);
}
