function pasanganTerbesar(num) {
    // you can only write your code here!
    function findmax(array) {
        var max = 0,
            a = array.length,
            counter
        for (counter = 0; counter < a; counter++) {
            if (array[counter] > max) {
                max = array[counter]
            }
        }
        return parseInt(max);
    }
    var weirdArray = [];
    for (let index = 0; index < num.toString().length; index++) {
        let index2 = index + 1;
        weirdArray.push(num.toString()[index] + num.toString()[index2]);
    }
    weirdArray.pop();
    //console.log(weirdArray)
    // let = largestNum = 0;
    // for (let index = 0; index < retardedArray.length; index++) {
    //     if (largestNum < retardedArray[index]) {
    //         largestNum == retardedArray[index]; return largestNum;
    //     }
    // }
    return findmax(weirdArray)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99