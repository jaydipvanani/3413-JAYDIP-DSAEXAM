let arr = [12, 23, 45, 67, 11, 18, 90, 18, 23, 7, 52];
let value = 18;


function search(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            console.log(`${value} index ${i}`);
        }
        else{
             console.log("element is a not exist");
        }

    }

}
search(arr, value);
