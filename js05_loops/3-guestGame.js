//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);//math.round yuvarlıyor math.random da rastgele sayı üretiyor 100 arası dediğimiz için 100 le çarptık

let tahmin;
let istek = true ;
while(istek){
do { //do while koyduk daha uygun çünkü oyun baştan başlıyor ve sonra kontrol ediyor  
  tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
  hak -= 1;
  if (tahmin === rastgele) {
    console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);// hak sabitse 5 - hak diyerek şu kadarda bildiniz diyoruz. hak 5 olduğu sürece
    break;
  } else if (tahmin < rastgele) {
    console.log("ARTTIR ⬆️");
  } else {
    console.log("AZALT ⬇️");
  }
} while (hak > 0);

if (tahmin !== rastgele) {
  console.log("Uzgunuz oyunu kaybettiniz 😔😔");//bildğinde burası yazdırmasın dye if bloğuna aldık
}

// for (hak;hak>0; hak--){

// }
const tercih = prompt("Tekrar oynamak ister misiniz? E veya e giriniz!")
    if(tercih === "E" || tercih === 'e'){
        istek = true;
        hak=5;
    }else if(tercih !== 'E' || tercih !== 'e'){
        istek = false;
    }
}