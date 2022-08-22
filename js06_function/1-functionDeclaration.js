// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/
yazdir();// tanımlamadan öncede çağrılabiliyor function declaratıon yönteminde

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {// parametresiz
  console.log("merhaba");
}

yazdir(); //! invoke, call, cagirma
yazdir();

//* ORNEK2:
//*************************************************/

function selamla(ad, soyAd = "") {// parametreli soy ad yoksa boş gönder demek istiyoruz defeult paremetr
  console.log(`Merhaba ${ad} ${soyAd}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
selamla("Ayse");//ikinci değer giilmediği için undefine (tanımsızdır diyor)
selamla("John");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/

function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`; saat üretir new date ama gün saat yıl hepsini  get full year bilgisayar ın saatinin yılını alıyor
  // return sonuc;// sonuç değişkenini kullanmayadabilriz kullanmıcaksak
  return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980));

//* ORNEK4:
//*****************************************************/

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
} //if true de çalışır 5%2 1 ve 1 true dir degilse 0 false old için çift çıkar

console.log(tekCift(5));
console.log(tekCift(2));

//* ORNEK4:
//*****************************************************/
const n = +prompt("Bir sayi giriniz:");
console.log(tekCift(n));//fonksiyon içine ne yazdığın önemli değir değer olarak gider 
