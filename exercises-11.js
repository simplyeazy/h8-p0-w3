function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let buffer = [];
    for (let counter = 0; counter < arr.length - 1; counter++) {
        buffer.push(arr[counter] - arr[1 + counter]);
    }
    // console.log(buffer);
    for (let counter = 0; counter < buffer.length - 1; counter++) {
        if (buffer[counter] !== buffer[1 + counter]){
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false