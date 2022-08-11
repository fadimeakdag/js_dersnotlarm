console.log("app1.js is loaded")

/* let firstname = prompt("Enter your name: ");
alert("firtname :" + firstname ); */

// let sonuc = confirm("are you legal?")
// console.log(sonuc);

const student = {
    name: "nedim",
    age: 34,
};
console.log(student);

const otherstudent = student;
otherstudent.name = "dan brown";

console.log(student);
console.log(otherstudent);


let num1 = 501
console.log("num1 :>>" , num1 );
num1 = 888;
console.log("num1 >>", num1);


let num2 = 467;
num1 = num2;
console.log(num1, num2);
num2 = num2 + 3;
console.log(num1,num2);

