// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

// console.log("**** ARROW ******");

// //* ORNEK: Silindir Hacmi
// //************************************************/
//?SORU: Bir dairenin alanını hesaplayan fonksiyonu arrow fonksiyon olarak
//?yazınız. Yarıçap prompt ile girilmeli ve sonuç ana programda yazdırılmalıdır.

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;//*pi çarpı r kare *h math.pı yi açğırdık

// // console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);//*tofixed virgül sonrası 2 basama alıyor

// //* ORNEK: Yas hesapla
// //************************************************/
//?SORU: Doğum tarihini parametre olarak alan ve ana programa yaşı
//?hesaplayıp döndüren fonksiyonu yazınız

// const tarih = Number(prompt("Dogum Tarihini giriniz:"));

// //! Arrow Func yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;//*güncel tarihi alıyor
//   return yas;
// };

// //* alternatif
// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// // console.log("YASINIZ:" + yasHesapla(tarih));
// console.log("YASINIZ:" + yasHesaplaKisa(tarih));

// //?-----------------------------------------

// // console.log("YASINIZ:" + yasHesapla2(tarih));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };
// //?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla3(tarih));

// //! Func Declaration yontemi ile tanimlama
// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// }
// //?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...// bir sayı kendinden önceki iki sayının toplamına eşit demek fibonacci
//birinci terim 1 ikinci terim bir üçüncü terim bir ve ikinci terimin toplamına eşit yani 1+1 =2
let stringResult = "1,1";
// f(n) = f(n-1) + f(n-2) n inci terimi bulmak istiyorsak kendinden bir önceki yani n-1 + kendinden iki öncekinin n-2 nin toplamını bulmamız lazım . 
//*f(6)= f(5)+f(4) toplamına eşit
//*f(5)=f(4)+f(3) + f(4)= f(3)+ f(2)nin toplmına eşit
//*f(4)=f(3)+f(2) + f(3)= f(2)+f(1)+  f(3)=f(2)+f(1)
//*f(3)=f(2)+f(1) //f(2) ve f(1)leri saydığımızda  8 yapar f(6)=8 dir
const fibo = (n) => {
  let fib1 = 1; // sabit burası
  let fib2 = 1;// sabitt amac bu iki değeri baştan oluşturmak tanumlamak
  let toplam = 0;// ara toplam ara değişkene ihtiyaç var hangi sayı girilecek belli değil

  for (let i = 2; i < n; i++) {// 2den başlattık fib 1 ve 2 elimde
    toplam = fib1 + fib2;// fib 1 ve 2 yi toplama aktardık fib 1+ fib2 1(1+1=2)  toplam 2 oldu yani toplamda fib 3 var
    fib1 = fib2;// kayma yapıyoruz  fib2 yi fib 1 e
    fib2 = toplam;// fib2 ye toplam degerini atıyoruz
    stringResult += "," + fib2;// toplanan degerleride görmek için yukarıda değişken atadık str içinde 1 ,1 i verdik 2 den başladığı için fib2 leri araya virğül koyarak eklesin demek her bir döngüde eklenmiş oldu
  }

  return fib2; //en son değer fib2 de
};

const n = +prompt("n terimini giriniz:");
if (n <= 0) {
  console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
} else {
  console.log(`FIBO(${n})= ${fibo(n)}`);
  console.log(stringResult);
}
