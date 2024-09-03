function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        
        let key = arr[i];
        
        let j = i - 1;

        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
       
        arr[j + 1] = key;
    }

    return arr;
}

const exampleArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(exampleArray);
console.log("Sorted Array:", sortedArray);