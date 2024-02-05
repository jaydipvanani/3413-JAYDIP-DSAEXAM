function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];


    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left[left.length] = arr[i];
        }
        else {
            right[right.length] = arr[i];
        }
    }
    result = quickSort(left)
    result = result.concat(pivot)
    result = result.concat(quickSort(right))

    return result;

};

let arr = [50,23,89,45,111,89,1,900,67];
console.log(quickSort(arr));
