// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at //önden tanımlamada bu şekilde hata alırız
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

console.log(tekCift1(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {// 3. değer girilmezse eşitliyoruz - değer girme ihtimaline karşı -number .max_value ye eşitliyoruz.buda en büyük negatif sayı demek number ın gösterebileceği en büyük sayının negatifi demek
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9));

console.log("Girilen sayilarin en buyugu:", buyukBul(9, 10));

//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//**************************************************/
const topla = function (s1, s2) { // burası sonrada tanımlansa olur expressıonb mantığına ters normalde invok işlemi hesaplada en sonda olduğu için hatq vermiyor
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
//*fonsiyon içinde başka fonksiyonlar çağırdık
const hesapla = function (s1, s2, islem) {
  let sonuc = 0;// çıktıyı sonuç seklinde almak için sonuç değişkeni atıyoruz sonuc burada olsun işleme ne girerse güncelliyor// 
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  console.log("SONUC:", sonuc);
  return sonuc; // ana proğrama gelsin diye
};
  //*böylede olabilir yeri
//   const topla = function (s1, s2) {
//   return s1 + s2;
// };

// const cikar = function (s1, s2) {
//   return s1 - s2;
// };
// const bol = function (s1, s2) {
//   return s1 / s2;
// };
// const carp = function (s1, s2) {
//   return s1 * s2;
// };


hesapla(3, 5, "+"); // return olmadan ki hali
console.log(hesapla(4, 3, "/"));
