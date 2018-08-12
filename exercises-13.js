function targetTerdekat(arr) {
    // you can only write your code here!
    let spaceCounter = 0;
    let startO = false;
    let startSpace = false;
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index].toLowerCase() === 'o') {
            startO = true;
        }
        if (startO && arr[index].toLowerCase() === ' ') {
            spaceCounter++;
            if (arr[1+ index].toLowerCase() === 'x') {
                spaceCounter++;
                break
            }
        }

    }
    return spaceCounter;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2