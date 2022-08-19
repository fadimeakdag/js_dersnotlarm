// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//?konsola 10 kere bir ifade yazdıran program yazınız

for(let i=1 ; i<=10; i++){
    console.log("hello");
}

for(let i=1 ; i<=100; i++){
    console.log(`${i}-hello`);
}

//? Ornek: 1 den n kadar sayiları toplayan kodu yazınız.


const n= Number(prompt("bir sayı giriniz")) 
let toplam=0 // globalde çalışması için buraya verdik degeri
for (let i=1; i<=n; i++){
    // toplam = toplam+i
    toplam +=i
    console.log(toplam, i)
}
console.log("SONUC:", toplam)


//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi ureten kodu
//? for dongusu ile yaziniz..

//* NOT: yuvarlam fonksiyonları
//* Math.floor() => en yakın alt tam sayıya (surekli asagiya) yuvarlar(21.1 21 yapar 21.9 21 yapar)// bunda hep asağıya yuvarlar 100 çıkmaz hiç
//* Math.ceil() => en yakın üst tam sayıya (sürekli yukariya) yuvarlar(21.1 i 22 yapar 21.9 u 22 yapar)(0 hiç çıkmaz )
//* Math.round() => degerine gore yuvarlar..5 teb-n sonra yukarı digeri aşagı(45.5 46 yapar 45.4  45 yapar buçuk ve üstü üstüne yuvarar)
// round yaparsak 0 ile 100 arası dediğimiz için üretir o ile 100
//* Math.trunc() => kesirli sayinin tam kismini alir. yuvarlamaya (virgüle bakmaz)

//*Math.random() 0 ile 0.99 arasinda sayi üretir.küsüratlı sayı

for( let i=1; i<=10; i++) {
    const rastgele = Math.round(Math.random() *100 ) ;//100 grubuna getiriyoruz kusuratlıları 100 e kadar istedi 100 le çarpıyoruz
    console.log(rastgele);
    
}


//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const sayı = +prompt("Pozitif bir sayı giriniz:");
let asal = true; // flek mantığı bayrak boolean değişkene başlangıç değişkeni veriyoruz o değişkeni aşagıda kontrol ediyoruz .durum değişikliği olduğu yerde folslıyoruz
if(sayı <= 1){
    alert("Sayı 1'den büyük olmalıdır");
} //negatif 0 ve 1 i girmesin diye alertle uyarı verdik asal sayı 1 ve kedniden başka böleni olnayan olduğu için 1 i aradsn çıkardır
else{
    for(let i = 2 ; i<sayı; i++){
       if(sayı % i  === 0) {
        asal = false;
        break;
       } 
    }
   
const sonuc = asal == true ? "ASALDIR" : "ASAL DEĞİLDİR"; // burayı asal veya deil mi diye yyazdırmak için değişken atadık yukarıda  asal true dedik
console.log(`${sayı} ${sonuc}`);
     
}// for döngüsünü neden kuruyoruz girilen sayı kadar bölünebilirliği kontrol etsin diye