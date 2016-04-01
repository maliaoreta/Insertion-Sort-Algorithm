function insertionSort (arr) {

  for (var i = 1; i < arr.length; i++) {

    var lastSorted = arr[i-1];
    var curr = arr[i];


    while (curr < lastSorted) {


    }

  }  


  return arr;
}


var testArr = [4, 5, 1, 3, 2, 8, 9, 10, 0, 7, 6];
console.log(insertionSort(testArr));