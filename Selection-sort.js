function selectionSort(arr) {
    
    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }

    return arr;
}

const exampleArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(exampleArray);
console.log("Sorted Array:", sortedArray);