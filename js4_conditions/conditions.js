// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

// //? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
// //? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayi = Number(prompt("Bir sayi giriniz:"));
// if (sayi > 0) {
//   console.log(`${sayi} pozitiftir.`);
// } else if (sayi == 0) {
//   console.log(`${sayi}'a esittir.`);
// } else {
//   console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

// //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.
// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// //* 1.Yontem
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }

// //* 2.Yontem
// let enBuyuk = n1;

// if (n2 >= enBuyuk) {
//   enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//   enBuyuk = n3;
// }
// console.log(`${enBuyuk} en buyuktur`);

//! ODEV1: Dort Islem Hesap Makinasi

//**************** SWITCH-CASE *******************

// let num1 = +prompt("please enter first number")
// let num2 = +prompt("please enter second number")
// let opr = prompt("Which operator will you use?")
// switch(opr){
//     case "+":
//         console.log(`Result is ${num1+num2}`);
//         break;
//     case "-":
//         console.log(`Result is ${num1-num2}`);
//         break;
//     case "*":
//         console.log(`Result is ${num1*num2}`);
//         break;
//     case "/":
//         console.log(`Result is ${num1/num2}`);
//         break;    
// }

// const x = +prompt('1. sayıyı giriniz');
// const y = +prompt('2. sayıyı  giriniz');
// 2. Yöntem:
// console.log(`m + n : ${m + n} `);
// console.log(`m - n : ${m - n} `);
// console.log(`m x n : ${m * n} `);
// console.log(`m / n : ${m / n} `);
// 3. Yöntem:

// const operatör = prompt('Lütfen işlem türüni giriniz.');
// if (operatör === "+") {console.log(`x + y : ${x + y} `)}
// if (operatör === "-") {console.log(`x - y : ${x - y} `)}
// if (operatör === "*") {console.log(`x * y : ${x * y} `)}
// if (operatör === "/") {console.log(`x / y : ${x / y} `)}


//! ODEV2
//! Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//! Program
//! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.
// let gun = prompt("Gun giriniz : ")
// switch(gun) {
//   case "pazartesi":
//     gun = "ınclass";
//     break
//   case "salı" :
//     gun = "ınclass";
//     break
//   case "çarşamba":
//     gun = "ınclass";
//     break
//   case "perşembe":
//     gun = "ınclass";
//     break
//   case "cuma":
//     gun = "Teamwork";
//     break
//   case "cumartesi":
//     gun = "ınclass + Workshop";
//     break
//   case "pazar":
//     gun = "Self-Study";
//     break
//   default:
//     alert("yanlış gün girdiniz");
//     break
    

// // }
// console.log(`bu gun ki dersiniz : ${gun}`);

// let gun = prompt("Gün giriniz");
// switch (gun) {
//   case "pazartesi":
//     console.log(`Bugün günlerden ${gun} ders olarak: In-Class `);
//     break;
//     case "salı":
//     console.log(`Bugün günlerden ${gun} ders olarak: In-Class `);
//     break;
//     case "çarşamba":
//     console.log(`Bugün günlerden ${gun} ders olarak: In-Class `);
//     break;
//     case "perşembe":
//     console.log(`Bugün günlerden ${gun} ders olarak: In-Class `);
//     break;
//     case "cuma":
//     console.log(`Bugün günlerden ${gun} ders olarak: Team-Work `);
//     break;
//     case " cumartesi":
//     console.log(`Bugün günlerden ${gun} ders olarak: InClass + Workshop`);
//     break;
//   default: {
//     console.log(`Yanlis gun girildi.`);
//   }
// }

//**************** TERNARY *******************

// //? ORNEK5: Kaldi-Gecti
// const not = +prompt("Notunuzu giriniz:");
// // let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// // console.log(sonuc);
// console.log(not >= 50 ? "Gecti" : "Kaldi");

// //? ORNEK6:
// const yas = 17;
// const cinsiyet = "erkek";
// const saglikli = false;

// yas >= 18 && cinsiyet === "erkek" && saglikli
//   ? console.log("askerlik yapmali")
//   : console.log("Askerlik yapmasina gerek yok");

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.


//* maas = maas * 1.5
//  let asgariUcret = 5500;
//  let maas = +prompt("Maasınızı giriniz");
//  if( maas > asgariUcret) {
//   maas = maas * 1.1;
// }else if (maas < asgariUcret){
//   maas = maas * 1.5;
// }
// console.log(`zamlı maasınız ${maas}`);

// const asgariUcret = 5500
// let maas = Number(+prompt("Maaşınızı giriniz "))
// if (maas<= asgariUcret) {
//     let yeniMaas = maas*1.5
//     console.log(`Kişinin yeni maaşı: ${yeniMaas} `);
    
// }
// else{
// let yeniMaas = 1.1*maas
// console.log(`Kişinin  yeni maaşı: ${yeniMaas} `);
// }

//! ODEV4: Console’dan kişinin gelir ve gider miktarını alan
//! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//! değilse  Kredi Verilemez 🥺
//! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

// let gelir = +prompt("aylık geliriniz");
// let gider = +prompt("aylık gideriniz");
// let asgarı = 5500;
// let fark = gelir - gider
// let kredi = fark >= asgarı ? "kredi alabilir" : "kredi alamaz";
// console.log(kredi);