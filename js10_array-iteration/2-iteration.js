//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");

//
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];
prices.forEach((p) => console.log(p));//fiyatlar dizisine git foreach ı çağır foreach içine arrow  fonksiyon yazıyoruz arrow okuması şöyle prices de gezin her bir price yi konsola bastır p nin olduğu yere herhangi bir isim yazabilirsin

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
let sum = 0;
prices.forEach((price) => (sum += price));// prices dizisindeki her bir price yi al ve sum a ekle
console.log("SUM:", sum);

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))); //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

let total = 0;
prices.forEach((price, index, arr) => { // ikinci parametre indisi veriyor burada virgülle parametreyi aktif hale getiriyoruz herhangi bir isim olabilir. ara toplamdaki her bir değeri yazdırmamız için ikinci parametreyi yazmak lazım buda indisi demek
  // birden fazla parametre kullandığımız için arrow fonksiyonda  süslü parantezi açtık
  total += price;//total in ara değeri
  console.log(`${index + 1}.iteration: ${total}`);// 1.iterasyon yazsın diye ${index+1}
  arr[index] = Math.trunc(price * 1.1);// yüzde 10 zam için 3. parametreyi ekliyoruz 3. parametre prices i temsil eder arr nin her bir indisine yani [index] yüzde 10 zam yap yüzde 10 zam demek price*1.1 dmek 
  // yuvarlama hatalarından kurtulmak için math kütüphanesinden trunc ı çağırıyoruz tam kısmı al demek
});

console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const bigNames = names.map((name) => name.toUpperCase());// names deki her bir name git map ile modifikasyon yap her bir name yi touppercase yap
console.log(bigNames, names);
console.log(names.map((name) => name.toUpperCase()));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));// toprecision 3 yazarsak 3 basamaklı alır tam kısmı virgül dahil ama type ı str dir bunu number ile numberlaştırıyoruz
console.log(euroPrices);

const dolarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(2));
console.log(dolarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];
//! Orjinal diziyi degistidik.
//?For UpperCase
// products.map((p, i, arr) => (arr[i] = p.charAt(0).toUpperCase()));

//?For Capitilize
products.map((p, i, arr) => (arr[i] = p[0].toUpperCase() + p.slice(1)));//products dizisini aldık maple içinde dolaşıyoruz p her bir products i indisi arr products un kendisi products dizisindeki  elemana git ve i inci elemanın değerini touppercase yap
// arr[i] products un her bir elemanı
console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigThan = salaries.filter((s) => s > 10000);//salaries e git seçme olduğu için fiter ı kullan s i filtrele naıl s>10000 den küçük olanları
console.log(bigThan, salaries);

const range = salaries.filter((s) => s >= 6000 && s <= 10000);// kosulları and ve or la birleştirebiliriz
console.log(range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara(seçme fiter) %10 zam (zam map le)yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Increase = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));//math.trunc tam değer için

console.log(lessThan9000Increase);

salaries
  .filter((s) => s < 9000)//filter  seçti
  .map((s) => Math.trunc(s * 1.1))// map modifiye etti işlem yaptı yani yüzde 10 zam yaptı
  .forEach((s) => console.log(s));//foreach yazdırdı herhangi bir değere atama yapmak zorunda kalmadık foreach den dolayı
//* ======================================================
//*                 REDUCE METHOD
//* ======================================================


// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const sumOfSalaries = salaries.reduce((acc, val, i) => acc + val, 0);

console.log("SUM:", sumOfSalaries);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfRaisedSalaries = salaries
  .filter((sal) => sal <= 9000)
  .map((sal) => Math.trunc(sal * 1.1))
  .reduce((acc, salary) => acc + salary, 0);

console.log("Sum Of Raised Salaries:", sumOfRaisedSalaries);