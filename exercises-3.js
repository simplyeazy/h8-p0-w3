var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    for (let outer = 0; outer < input.length; outer++) {
    
        console.log(`Nomor ID: ${input[outer][0]}`);
        console.log(`Nama Lengkap: ${input[outer][1]}`);
        console.log(`TTL: ${input[outer][2]} ${input[outer][3]}`);
        console.log(`Hobi: ${input[outer][4]} \n`);
    }

}
dataHandling(input);