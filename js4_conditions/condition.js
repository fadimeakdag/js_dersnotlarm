// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");
//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayı = Number( prompt("Bir sayı giriniz"));
// if( sayı > 0) {
//     console.log(`${sayı} pozitiftir`);
// }else if (sayı == 0) {
//     console.log(`${sayı} 0'a eşittir.`);
// }else{
//     console.log(`${sayı} negatiftir.`);
// }
// console.log(sayı, typeof sayı);

//?Ornek2: consoloden  3 tamsayı alarak bunların en büyüğünü yazdırınız.

const n1 = +prompt("sayı1:");
const n2 = +prompt("sayı2:");
const n3 = +prompt("sayı3:");
// //*1.Yöntem
// if(n1 >= n2 && n1 >= n3){
//     console.log(`${n1} en büyük sayıdır`);

// }else if (n2 >= n1 && n2 >= n3){
//     console.log(`${n2} en büyük sayıdır`);
// }else if(n3 >= n1 && n3 >= n2){
//     console.log(`${n3} en büyük sayıdır`);
// }
//*2.Yöntem sıralı iflerle tek tek ayrı ayrı bakar birbirinden bağımsız olunca ikisinede bakar else if lerle bağlı değil burası.ilk büyük ifde çıkar if elif yapsaydık
let enBuyuk = n1;
if (n2 >= enBuyuk) {
  enBuyuk = n2;
}
if (n3 >= enBuyuk) {
  enBuyuk = n3;
}
console.log(`${enBuyuk} en buyuktur`);






ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

// const say1 = +prompt("sayı giriniz:");
// const say2 = +prompt("sayı giriniz:");
// const operatör = prompt("operatör giriniz:");


// if (operatör = "+"){
//   console.log(`${say1}+${say2}`)
// }else if (operatör = "-"){
//   console.log(`${say1}-${say2}`)
// }else if (operatör = "*"){
//   console.log(`${say1}*${say2}`)
// }else if (operatör = "/"){
//   console.log(`${say1}/${say2}`)
}


