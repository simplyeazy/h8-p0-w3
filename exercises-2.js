function fungsiBalik(kata) {
    let balik = "";
    for (let index = kata.length-1; index >=0; index--) {
        balik = balik + kata[index]; 
    }
    return balik;
}

console.log(fungsiBalik("hello world!"))