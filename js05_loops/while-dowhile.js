// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//?10 kere konsola merhaba yazdıran uygulamanın while döngüsü ile yazımı

// * let i = 1; //dışarda sayaç olmalı değişken yani içerdede o değişken arttırılmalı
// * while (i<=10) {
// *    console.log(i + "  merhaba");
//  *   i++;//i yi arttırmazsan değer sabit kalır ve sonsuz döngüye girer
// * }





//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.
//if le tekrar bakamayız yanlış girdiğinde bu yüzden while kullanoyoruz

//if (not < 0 // not<100){
    //alert("not 0 ile 100 arasında olmalıdır")
//}

//* let not = prompt("Lütfen 0-100 arasıda not giriniz.");
//* while (not < 0 || not > 100){
// *    console.log("Not 0-100 arası olmalıdır");
// *    not = prompt("Lütfen 0-100 arası bir not girin.");
//* }
//* console.log("Girilen not: ", not)


console.log("*******DO-WHİLE*******")
//?10 kere konsolda merhaba yazdıran uygulama do while dongüsüs ile yapın
let sayac =1;
do {
    console.log("merhaba -", sayac);
    sayac++;
} while (sayac <= 10);
//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

 let not1; // not u tanımladık
 do{
   not1 = +prompt("Lütfen 0-100 arasıda not giriniz."); if (not1 < 0 || not1 > 100){
    console.log("not 0-100 arası olmalıdır.")
   }
 }while (not1 < 0 || not1 > 100);
 console.log("Girilen not: ", not1)




// let pc= Math.trunc(Math.random()*100);
// console.log(pc);
// for(let i=1 ; i<=6 ; i++){
//         let tahmin = +prompt(`tahmininiz:`);
//         if(tahmin===pc){
//             console.log(`bildiniz`);
//             break
//         }
//         else{
//             if(tahmin<pc){
//                 console.log(`arttırın`);
//                 console.log( (5-i)+ ` hakkınız kaldı`);
//             }
//             else{
//                 console.log(`azaltın`);
//                 console.log( (5-i)+ ` hakkınız kaldı`);
//             }
//         }
// }