
//Exercise 2

Array.prototype.bubbleSort = function() {
    // Copy the array
    let arr = this.slice();

    // Bubble sort
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example 2 usage:
console.log("EX.2")
console.log([6,4,0, 3,-2,1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

