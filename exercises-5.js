function palindrome(kata) {
    let walik = "";
    for (let index = kata.length - 1; index >= 0; index--) {
        walik = walik + kata[index];
    }
    // console.log(walik)
    // console.log(kata)
    if (walik === kata) {
        return true;
    }
    return false;
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false