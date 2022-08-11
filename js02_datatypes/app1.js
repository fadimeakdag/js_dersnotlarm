console.log("app1.js Running")

// let a = 5;
// console.log(a);

// {
//     // var a = 3;
//     let a = 3;
//  console.log(a);
// }

// console.log(a);

// console.log(typeof 0)
// console.log(typeof 3.14)
// console.log(typeof "")
// console.log(typeof (3>2))
// console.log(3>2)
// console.log(typeof "hello")

// let b = prompt("Bir şey giriniz");
// console.log(b, typeof b)
// let c = +prompt("Bir şey giriniz");
// console.log(c, typeof c)

// console.log(b, typeof b)
 
// console.log(typeof "number")

// let age;
// console.log(age)
//undefined değer atanmamış data tipidir

// console.log(myAge)
//not defined tanımlanmamış hatadır

// console.log("hello")
//hatadan dolayı çalıştırmıyor

// var myAge= 40;
//undefined yaptı ket vurmayı kaldırdı ve alttaki str ye ulaştık
// console.log("hello");

// let a = null

// console.log(typeof a);


// let x;

// do {
//     x = prompt("enter a number : ");
// }while(isNaN(x));

// console.log(x, x*x);

/*isnan kullanımı yukarıdaki*/

/*== js de aynı str 12 ile num 12 benim için aynı değere sahip diyor */
// console.log("12" == 12);

// console.log("12" === 12);
/*degerleri eşit mi hayır diyor*/

// let x = 123456789101213
// let y = 123456789123456789

/*15 basamaktan sonra doğruluğu garantilmiyor*/

// console.log({x})
// console.log({y})

// let z = 0.12345678912345678
// let zz = 0.1234567890123456789

// console.log({z});
// console.log({zz});
/*virgülden sonra 17 basamağı garantiliyor fazlasını garantilemiyor*/

// console.log(0.1+0.2);

// let f = 0.3 + 0.4;
// console.log(f)

// console.log(+f.toFixed(2)) //tofixsed virgül sonrası 2 basamagı al dedik 2 koyarak ama bu str başına artı koyarak numbera çevirdik

// let h = 1_000_000_000;
// console.log(h);
//alt tire görünürlük açısından yoksa değer aynı çıkar

let i = 'this \'is "" a ""   """""string"""""';
let j = "this '''''is '''''a \" string";
let k = `this is a string`;
 console.log(typeof i)
 console.log(typeof j)
 console.log(typeof k)

 let userName = 'fadi ';
 console.log(userName.length)
 console.log('merhaba ', userName);

 console.log(`merhaba ${userName}`)
 
 console.log(`2 + 3 = ${2+3}`)
 console.log(`2 + 3 = ${'2'+'3'}`)


let m = ``
let n = ' '
let p = 0
 console.log(Boolean(m))
 console.log(Boolean(n))
 console.log(Boolean(p))

 console.log(Boolean(3 > 5))
 console.log(Boolean(3 > 2))


 const myCar = {
    make : "ford",
    model : "mustang",
    year : 1965,
    color : "black"
 }

 console.log(myCar)
 

 myCar.color = "green"
 console.log(myCar)

//  myCar = "ford" // izin vermez atanmış

 myCar.sunRoof = false;
 console.log(myCar)

 myCar.age = function(current){
    console.log(current - this.year)
 }
 myCar.age(2022)