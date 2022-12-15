console.log("im working");
var mergeSort = function (arr) {
    if (arr.length === 0) {
        return [];
    }
    if (arr.length === 1) {
        return arr;
    }
    var midPoint = Math.floor(arr.length / 2);
    var left = arr.slice(0, midPoint); // get left half of array
    var right = arr.slice(midPoint, arr.length); // get right half of array
    return merge(mergeSort(left), mergeSort(right));
};
var merge = function (left, right) {
    var sorted = [];
    var leftIndex = 0;
    var rightIndex = 0;
    //as long as both have indexes
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }
    //check if left side still has some
    while (leftIndex < left.length) {
        sorted.push(left[leftIndex]);
        leftIndex++;
    }
    //check if right side still has some
    while (rightIndex < right[rightIndex]) {
        sorted.push(right[rightIndex]);
        rightIndex++;
    }
    return sorted;
};
var a = [45, 21, 7, 63, 11, 3, 58, 37];
console.log(mergeSort(a));
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]
/*
45,21,7,63,11,3,58,37
*/
