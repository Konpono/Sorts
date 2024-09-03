function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
        n--; 
    } while (swapped); 

    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);