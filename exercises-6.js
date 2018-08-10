function angkaPalindrome(num) {
    function checkPalindrome(num) {
        var n = num;
        var rev = 0, rem;
        while (n > 0) {
            rem = n % 10;
            rev = rev * 10 + rem;
            n = Math.floor(n / 10);
        }
        if (num === rev) {
            return true;
        }
        return false;
    }
    while(!checkPalindrome(num)){
        num++;
    }
    while(checkPalindrome(num)){
        num++;
    }
    return num-1;
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001