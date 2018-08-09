var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function monthParser(month) {
    switch (month[1]) {
        case "01":
            console.log("Januari")
            break;
        case "02":
            console.log("Februari")
            break;
        case "03":
            console.log("Maret")
            break;
        case "04":
            console.log("April")
            break;
        case "05":
            console.log("Mei")
            break;
        case "06":
            console.log("Juni")
            break;
        case "07":
            console.log("Juli")
            break;
        case "08":
            console.log("Agustus")
            break;
        case "09":
            console.log("September")
            break;
        case "10":
            console.log("Oktober")
            break;
        case "11":
            console.log("November")
            break;
        case "12":
            console.log("Desember")
            break;
        default:
            break;
    }
}
function dataHandling2(input) {
    input.splice(1, 1, `${input[1]} Elsharawy`);
    input.splice(2, 1, `Provinsi ${input[2]}`);
    input.splice(4, 1); //Removes one element starts from index 4
    input.splice(4, 0, "Pria");
    input.splice(5, 0, "SMA Internasional Metro");
    console.log(input);
    let tgl = input[3];
    monthParser(tgl.split('/'));
    console.log(tgl.split('/').sort(function (a, b) { return b - a }));
    let tgl2 = input[3];
    console.log(tgl.split('/').join('-'))
    console.log(input[1].slice(0, 14))
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */