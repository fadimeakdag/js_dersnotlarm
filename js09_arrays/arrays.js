// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "ismet", "can", "canan", "matheww"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

const bosDizi = [];
console.log(bosDizi);

// ! 2.Yöntem (Object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlik bos bir Array oluşturdu
const numbers1 = new Array(10);
console.log(numbers1);

// ! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma
console.log(diller[1]);
const go = diller[3];
console.log(go);

console.log(isimler[isimler.length - 1]);//son elemanı alma
//? at()
console.log(isimler.at(-1));//son elemanı bu sekilde at ilede alabiliriz  eksi index at da kullanılıyor

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "saffet";
console.log(isimler);//const yeni atamaya izin verdi aslında burada kısmı değişikliğe izin verdi sadece tamamen değiştirmeye izin vermiyor  nonprimitivede böyle bir durum var .
// burada ismet yerine saffet yazdık

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];// bu şekilde değişemez consta 

//? numbers dizisinin son elementinin degerini bir arttirin
console.log(numbers);
numbers[numbers.length - 1]++; // son elementi bir arttır demek
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.

const yas55 = kisiler[5][2];//indisleme ile istediğimiz veriye ulasabiliriz
console.log(yas55);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //?43 5. indisin 1 .indisi bir attı
console.log(kisiler);
console.log(yaslar);// sığ kopyalama derin kopyama var dizilerde sığ kopyalamada değişiklik gözükür buradaki gibi

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//** pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//*shift dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
console.log(arabalar);

//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);

//* sort() Diziyi alfabetik olarak siralar.
isimler.sort();//aski kodlarına göre sıralar
console.log(isimler);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.
const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);// tamamına büyük mü küçük mü diye bakıyor ve sıralama yapıyor sort methodu tek tek deniyor arrow fonksiyonla kıyaslama yapıyor 
console.log(sayilar);

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);// tüm elemanları 0 yap diyoruz
console.log(array1);

array1.fill(1, 2, 4);// 2. indisden 4. indise kadar olan elemanları 1 yap demek
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)); //? eleman var mı yokmu ona bakar varsa true döndürür yoksa false
console.log(sayilar1.includes("5")); //? false

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2 nin indeksini döndürür
console.log(sayilar1.lastIndexOf(2)); //? 5 son numarik 2 nin indesk nosu
console.log(sayilar1.lastIndexOf(4)); //? -1 bulamadığı zaman -1 döndürür

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------



//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join(" "));
console.log(sayilar1.join()); // 3,5...
console.log(sayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
const yeniArabalar = arabalar1.slice(2);//2. indisten itibaren döndürür 
console.log(yeniArabalar, arabalar1);

const yeniArabalar1 = arabalar1.slice(1, 3);// 1 den 3 e kadar al 3 dahil değil başalngiç bitiş verebiliyoruz
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
const yazilar = ["Bugun", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];
const combinedArr = yazilar.concat(// hangisisni eklemek istersen onu başa yazıp birleştirebilirsin
  true,
  numbersArr,
  ["aslinda", "cok", "sicak"],// birden fazla ekleme yapabilir hatta aynı anda dizi oluşturabilirsin 
  [["x", "y"]]// array içinde array ekleme yapılabilir değer eklenebilir true  deki gibi
);
console.log(combinedArr);

//* every() hepsi
//*-----------------------------------------------------------
//? Tum diziyi itere (dolaşır) eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yasArray = [18, 22, 78, 34, 78, 79, 15];
const check = yasArray.every((yas) => yas >= 18); // every hepsi demek dizideki herkesin yaşı 18den büyükse true döndürür
check
  ? console.log("Dizideki herkesin yasi 18'den buyuktur")// ve 18den büyükse bunu döndür diyoruz true ise yani değilse diğerini
  : console.log("Dizide 18 yas alti var");

//* some()  bazısı
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((y) => y >= 80); // acaba 80 den büyük birisi var mı diye soruyoruz // some (y ) ile diğer y aynı değer olmalı yas yazdıysan yas veya baska bişi
console.log(buyuk80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin
const yasIlk30 = yasArray.find((yas) => yas >= 30);//yaşı 30 dan büyük olan ilk elementi döndür dedim
const yasSon30 = yasArray.findLast((yas) => yas >= 30);//bu koşolu sağlayan sonuncu elementi döndürür
console.log(yasIlk30, yasSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex);// yaşi 30dan büyük olanların indisini yazar ilk 30 un
