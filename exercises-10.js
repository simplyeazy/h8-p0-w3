function perkalianUnik(arr) {
    // you can only write your code here!
    let arrayFinal= [];
    for (let indexA = 0; indexA < arr.length; indexA++) {
        let mul = 1;
        for (let indexB = 0; indexB < arr.length; indexB++) {
           if (indexA!==indexB) {
               mul = mul*arr[indexB];
           }
            
        }
        arrayFinal.push(mul);
    }
    return arrayFinal;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]