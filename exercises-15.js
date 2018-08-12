function groupAnimals(animals) {
    // you can only write your code here!
    let buffer = [];
    let temporary = '';
    for (let i = 0; i < animals.length; i++) {
        for (let j = 0; j < animals[i].length; j++) {
            //console.log(animals[j])
            if(animals[j] > animals[1+j]){
                temporary = animals[j];
                animals[j] = animals[1+j];
                animals[1+j] = temporary;
            }
            // for (let k = 0; k < animals[i][j].length; k++) {
            //     console.log(animals[i][j]);
            // }
        }
    }
    return animals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]