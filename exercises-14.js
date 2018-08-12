function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let arrayGenap = [];
    let arrayGanjil = [];
    let arrayKelipatanTiga = [];
    let arrayCetak = [];
    for (let index = 0; index < arr.length; index++) {
        //do even check
        if (arr[index] % 2 === 0) {
            arrayGenap.push(arr[index]);
        }
        //do odd check
        if (arr[index] % 2 !== 0) {
            arrayGanjil.push(arr[index]);
        }
        //do three
        if (arr[index] % 3 === 0) {
            arrayKelipatanTiga.push(arr[index]);
        }
    }
    arrayCetak.push(arrayGenap,arrayGanjil,arrayKelipatanTiga)
    return arrayCetak;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]