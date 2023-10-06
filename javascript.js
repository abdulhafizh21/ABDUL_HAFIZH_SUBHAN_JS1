// if else
let kamuKenapa ="aku gak papa";
if (kamuKenapa != "aku gak papa") {
    
    console.log("lagi ada masalah")
} else {
    console.log("peka dikit dong jadi cowok")
}
 
// Nested if
let jenisKelmain = "cowo";
let realcowo =true;
if (jenisKelmain == "cowo") {
    console.log("aku cowok");
    if (realcowo) {
        console.log("anda cowok sejati")     
    } else {
        console.log("anda cowok jadi-jadian"); 
    } 
} else {
    console.log("anda bukan cowok"); 
}

// swith case
// let namaCewek = prompt("pilih cewek");
let namaCewek = ("SABRINA")
switch(namaCewek) {
case "AULIA":
    console.log("cantik,putih,tinggi")
    break;
case "PUTRI":
    console.log("cewek cool,cantik,pendek.")
    break;
case "SABRINA":
        console.log("cantik,imut,tinggi,wibu")
        break;
default:
 console.log('sorry tidak ada nama cewek ini')
}

// FOR STATEMENT
for (var i = 1; i <= 3; i++) {
    console.log("Juara :" + i);
}

//while
let grade =1;
while (grade <= 3) {  
        console.log("kelas:" + grade);     
        grade++; 
    }

// do while
let h=0;
do {
   h++;
    console.log("UMUR:" + h);
} while (h <= 2);

// function
function kita(namaSatu, namaDua) {
    const hasil = namaSatu + namaDua;
    return hasil;
}

const hasilGabung = kita("aku", "kamu");

console.log("Hasil gabung : "+ hasilGabung);

