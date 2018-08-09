function hitungJumlahKata(kalimat) {
    var spaceCounter = 0;
    for (let index = 0; index < kalimat.length; index++) {
        if (kalimat[index] === " ") {
            spaceCounter++;
        }
    }
    spaceCounter++;
    return spaceCounter;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5