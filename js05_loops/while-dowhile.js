// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.





let pc= Math.trunc(Math.random()*100);
console.log(pc);
for(let i=1 ; i<=6 ; i++){
        let tahmin = +prompt(`tahmininiz:`);
        if(tahmin===pc){
            console.log(`bildiniz`);
            break
        }
        else{
            if(tahmin<pc){
                console.log(`arttırın`);
                console.log( (5-i)+ ` hakkınız kaldı`);
            }
            else{
                console.log(`azaltın`);
                console.log( (5-i)+ ` hakkınız kaldı`);
            }
        }
}