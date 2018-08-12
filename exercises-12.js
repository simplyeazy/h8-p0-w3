function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let buffer = [];
    for (let counter = 0; counter < arr.length - 1; counter++) {
        buffer.push(arr[counter] / arr[1 + counter]);
    }
    //console.log(buffer);
    for (let counter = 0; counter < buffer.length - 1; counter++) {
        if (buffer[counter] !== buffer[1 + counter]){
            return false;
        }
    }
    return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false