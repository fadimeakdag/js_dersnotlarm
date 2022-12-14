//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------
const dizi = [-5, 15, 22, -4, 45, 78];

const negatifler = [];
const pozitifler = [];

const dizelereAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);// n in i inci elemanını ekle negatifleri
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizelereAyir(dizi);

console.log(negatifler);
console.log(pozitifler);
console.log(dizi);

//?-------------- ÖRNEK -------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

let toplam = 0; // ortalamayı bulmak için

for (let i = 0; i < notlar.length; i++) {
  //indisler 0 dan başladığı için i = 0 diyoruz i yi notlar dizisinin uzunluğu kadar arttır
  toplam += notlar[i]; // toplam değişkenine atıyoruz sayıları notlaın i inci elemanını
}

console.log("ORTALAMA:", toplam / notlar.length);//

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (arr, search) => {
//   let counter = 0;
//   for (let i in arr) { 
//     if (search === arr[i]) { //search dizinin içinde bir yerde varmı diyoruz burada (arr nin i inci elemanındavarmı search)
//       counter++; //(varsa sayaç değişkenini bir arttırıyoruz kaç tane varsa çıksın diye)
//     }
//   }
//   if (!counter) { //counter yoksa anlamında counter===0 anlamında yani conuter yoksa false ise demek//( döngünün dışına çıkıyoruz bulunmustur veya bulunamamıştır demek için ve yine bir koşul var if le koşul açıp counter bakıyoruz counter===0 sa bulunammamıştırtır diyoruz)
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times`;//(conter kere bulunmuştur)
//   }
// };
// for döngüsü ile kaç kere bulunduğunu öğreniyoruz for döngüsü dışında karar mekanızmasıyla yani ifle bulunamadıysa bulunamadı bulunduysa bulundu şeklinde bir yapı oluşturuyoruz findstudents i bir şey döndürecek şekilde ayarladık

// const name = prompt("Please enter a name").toLowerCase();
// console.log(findStudents(students, name));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentsOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    //? Ternary
    // search === item ? counter++ : null; //( tek kullanımlık ifadelerde ternary uygun değil yapsakda null yazıyoruz bi şey yapma anlamında)

    //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
    search === item && counter++; // for in deki if in tam karşılıgı aslında bu ampersant tek koşullu yerlerde çok kullanılır

    //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
    search === item || counter++;
  }

  // tek koşullu ifadelerde short-circuit kullan 
  //iki koşul varsa ternary
  // üç koşul varsa if yapısı
  // 5 6 koşulda swace case kullanmak mantıklı

  return !counter
    ? `${search} can not be found`
    : `${search} found ${counter} times`;
};

const studentName = prompt("Please enter a name").toLowerCase();
console.log(findStudentsOf(students, studentName));
