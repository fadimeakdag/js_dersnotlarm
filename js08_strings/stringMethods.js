// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");
//*js de veri yapıları ikiye ayrılıyoır primitive non primitive str .hem primitive hem non primitive alır 
//!primitive sadece bir değer tutar . 5 değeri atarsınız sadece 5 degeri olur ve basit veri yapılarıdır ama obje o şekıilde değil ona değer atarsın değiştirirsin kullanılan . objenin fonksiyonudır . obje komplex veri yapısı içinde fonnks vs vs seyler tutar.

//date bir obje new le yazılanlar obje bunlar js kodunu kolaylaştırır . ile eriştiğimiz her sey objedir

//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.null boolean number string symbolun  
// primitive tek bir değer tutar az yer kaplar bellekte
let str1 = "Clarusway";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

//!2 - Non-primitive String tanımlama (obje )
// nokta ile gelenler
const str4 = new String("Non-Primitive");// new keywordu (operatörü ile)ile string objesinden (konstraktır(kurucu yapuıcı fonksiyon) yeni instınt üretti . çıktısı type of u obje 
//düz objeyi nan primitive cevirmek objetc komplex veri yapıları içlerinde bir sürü fonksiyon saklıyor. bir sürü method kullanabiliriz obje ile 
console.log(typeof str4);

//?----------------------------------------
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // Concatination
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

console.log(str1.concat(str2)); //* Orjinal degerler bozulmaz
console.log(str1, str2);

//? Assigning ile degiskenin degeri degistirilebilir.
str1 = str1.concat(str3, " Path");
console.log(str1);

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

const myName = "Noah Adams";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let yourName = "ismet";
// yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase('tr');
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

//! ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu
//! donduren fonksiyonu yaziniz.

// const esitMi = (str1, str2) => {
//   return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
//     ? `${str1} ile ${str2} Esittir`
//     : `${str1} ile ${str2} Esit degildir`;
// };

const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase() // tek bir statment
    ? `${str1} ile ${str2} Esittir`
    : `${str1} ile ${str2} Esit degildir`;

console.log(esitMi("MerHaba", "MERHABA"));
console.log(esitMi("Hello", "Hell"));

//* ----------------------------------------------------------
//* localeCompare()
//* ----------------------------------------------------------
const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));//başka dillerde karşılaştırma ilki dil en olan base olan aşağidakı karsılastırma şekli

//? 'BASE: a ≠ b, a = á, a = A'//aksan ve büyük küçük harf duyarsız
//? 'ACCENT: a ≠ b, a ≠ á, a = A'//aksanların eşit olmalı
//? 'CASE: a ≠ b, a = á, a ≠ A'// küçük büyük harf duyarlılığı

//* ----------------------------------------------------------
//* charAt() belittiğiniz indisdeki karakteri göterir
//* ----------------------------------------------------------
const str6 = "Full Stack Path and DS path";
console.log(str6.charAt(5)); //* S
console.log(str6.charAt(4)); //* " "
console.log(str6.charAt()); //* F (ilk indistekini dondurur) bi şey belirtmese ilk krakteri döndürür
console.log(str6.charAt(14)); //* h  - çalışmadı son karakteri bulmak için length i kullanmamız lazım

//! lenght bir property (objenin degiskenidir) dir ve string'in
//! karakter sayisini tutar.
console.log(str6.length); //* 27 

//* String son harfini ogrenmek istersek
console.log(str6.charAt(str6.length - 1)); //* 0 -26 => 27 eleman 27 elemanlı str6 dan -1 çıkarsak son karakteri buluruz h 0 dan başladığı için 26 karakter son karakterdir

//* ----------------------------------------------------------
//* includes() - case sentive büyük küçük harf duyarlı str içinde sorduğun karakter varmı yokmu diye sorarsın
//* ----------------------------------------------------------
const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true
console.log(word.includes("That")); //? false
console.log(word.includes("")); //? true  yapısal bir durum true çıkmasının sebebi
console.log(word.includes("to be", 14)); //? false 14 den sonta to be varmı diyoruz yok o be den başlıyor 14
console.log(word.includes("to be", 13)); //? true

//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.
//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------

const toBe = word.indexOf("or"); // or un başladığı indeks yani o 6 dan başlıyor
console.log(toBe); //? 6
console.log(word.indexOf("be")); //? 3
console.log(word.lastIndexOf("be")); //? 16 son be yi
console.log(word.lastIndexOf("BE")); //? -1 bulamamış negatif sayı döndürdü be var BE  yok
console.log(str4); // her bir harfin indisini
//* ----------------------------------------------------------
//* search() indexof la benziyor indexof da sadece str arayabilirsin .
//*regular expression / / bunlar arasında ^ no değidir /[^\w\s]/g   
//* ---wayt space a dab z ye 0 dan 9 a her türlü karaktere denir harf mi rakam mı \w ile bakarsın boşluklara s ile bakarsın  g global demek yani tamamında ara demek bir sürü harf var istediğin zaman kullanabilirsin bune regex denir search buna izin veriyor-------------------------------------------------------

const buyukHarf = /[A-Z]/; // a dan z ye büyük harfleri bul ilk bulduğu büyük harfi dödürür
const nokta = /[.]/;
const virgul = /[,]/;
console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //?  18
console.log(word.search(nokta)); //? -1

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------
let word2 = "Sen gulunce guller acar gul pembe!";
console.log(new String(word2));
console.log(word2.startsWith("Sen")); //? true
console.log(word2.startsWith("gulunce")); //? false
console.log(word2.startsWith("gulunce", 4)); //? true
console.log(word2.endsWith("!")); //? true
console.log(word2.endsWith("acar", 23)); //? true 23 e kadar acar veriyor mu diye soruyoruz 22 olsa false verir çünkü aca oluyor

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable değiştirmek için atama yapabilirsin esayning // değiştirme bir aradığın ikincisi değiştiermek istediğn 
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma, saf olma";
// console.log(oku.replace("saf olma", "basarili ol"));
oku = oku.replace("saf olma", "basarili ol");
// oku = oku.replace(/saf olma/gi, "basarili ol");
console.log(oku);

oku = oku.replace(/BASARILI/gi, "Zengin");// regex yaptık büyük harfle aradık yazdı gi yaptık çünkü global demek g tamamını değiştir inkeysitiv olarak değiştir demek
console.log(oku);

//! NOT: replace metodu eger Regex ile aksi belirtilmiyorsa (g) sadece ilk buldugunu degistirir.

//* ----------------------------------------------------------
//*  replaceAll() --immutable  // regexsiz 
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));// no olan yerleri hayıra çevir demek

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33);// dılımlıyor bölüyor 33 den itibaren yeni bir karakter grubu oluşturuyor 33 den başlıyor sonuna kadar devam ediyor
console.log(sliced, typeof sliced); //? gunduz gece..

console.log(veysel.slice(17, 30)); //? dayim yuruyor.// 17 den 30 a kadar 30 dahil değil  bu methoda sadece 
console.log(veysel.slice(-10)); //? duz gece..
console.log(veysel.slice(-23, -19)); //? yuru eksi indeks kullanılabiliyor ama dizelerdeki gibi değil bu fonksiyon eksi indeksi kabul ediyor

console.log(veysel.substring(17, 30)); //? dayim yuruyor slice ile aynı sadece negatif sayıyı kullsnmıyor slice den eski bir yöntem
//! negatif indeks substring ile kullanilamaz.
console.log(veysel.substring(-10)); //? Uzun ince bir yoldayim yuruyorum gunduz gece..

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------
const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ");//boşluga göre bölüp array e çevirdi
console.log(splited, typeof splited); //! Bosluklara göre ayirarak Array'e cevirdi.

const chars = tarkan.split("");
console.log(chars); //* null karakterine göre harfleri ayırarark bir char dizisi oluşturdu. karakter dizizsi her bir karakteri tırnak içine alır

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.
tarkan.length()

//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE



let grup = ["başarılı bir grup"]
let grubumuz = grup.split(" ")
let grup2 = grubumuz.re



