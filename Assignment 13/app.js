// // chp 1 Alert
// alert("First name: Ali");
// alert("last name: Shakeel");
// alert("Email: Ali.Shakeel@example.com");
// alert("Phone Number: 03109988775");
// alert("Passwor: Jawan pakistan");
// alert("You're learning JavaScript!");
// alert("Hey User");

// //chp 2 (Variables for string)

// var ChapterString01 = ("This is camel case");
// console.log(ChapterString01);

// var ChapterString02 =("");
// ChapterString02 = ("chp 2 question two is done");
// console.log(ChapterString02);

// var teamName = (" JP Development Course ");
// alert("My team name is :"+ teamName  );

// var bestMan = "Charlie";
// bestMan =" Fazan ";
// console.log (bestMan);

// //chp3 (Variables for numbers)

// var caseQty =("");
// caseQty =144;
// console.log(caseQty)

// var num ="9";
// var num1 =9;
// console.log(num);
// console.log(num1);

// var num2 =6+3;
// console.log("IN this statment sum of two numbers (6+3) is "+ num2);

// var ChairPrice = 1200;
// var TabelPrice = 2300;
// var TotalAmount =(ChairPrice+TabelPrice);
// console.log("The total amount of chair and tabel"+ TotalAmount);

// var statment1 = 1300;
// var statment2 = (statment1+1000);
// console.log (statment2);

// //Chp 4 (Variable names Legal and Illegal)

// //var produ ctcost = 3.45;
// var productcost = 3.45;
// console.log("In this Statment i remove space because it is illegal in in javascript") ;

// // Chp 5 (Math Expression I)

// var largeNum =1000 * 2000;
// console.log(largeNum);

// var Reminder =10 % 3;
// console.log =(Reminder);

// // Chp 6 (Math Expression II)

// var x =100;
// var z =x--;
// console.log(z);
// console.log(x);

// // Chp 7 (Math Expression III)

// var chp7 = 2+(2*6)
// console.log("The answer of this statment one" + chp7);

// var banda1 = (2+2)*6;
// console.log(banda1);

// var banda2 = (2+2)*(2+4);
// console.log("The answer of this statment two" + banda2);

// var banda3 = ((2 + 2) * 4) + 2;
// console.log("The answer of this statment three" + banda3);

// var banda4 = 2 + 2 * 4 + 10;
// console.log(banda4);

// var banda5 = (2+2) *(4+10);
// console.log(banda5);

// var banda6 = 4 / (2 * 4);
// console.log(banda6);

// // Chp 8 (Concatenating Text Strings)

// var Pa = "Pakistan";
// var Za = "Zindabad";
// alert(Pa +" "+ Za);

// var  proton1 = "hey";
// var  proton2 = 2;
// console.log (proton1+" "+proton2)

// // Chp 9 (Prompts)
// var company1 = "what is your favorite food";
// var company2 = "Fast food";
// var company3 =prompt(company1+""+company2);
// alert ("your favorite food is"+""+company3);

// var life1 = "what is your favorite colour? ";
// var life2 = "black";
// var life3 = prompt(life1+life2);
// alert("your favorite colour is"+" "+life3)

// // Chp 10 (if statments)

// var age =20;
// if (age >= 18){
//     console.log("Allow")
// }

// var bord1 = "student card";
// var bord2 = "cnic";
// if (bord1 == "student card" || bord2 == "cnic")
// {
//     var bord3 = prompt("Do you have bank account")
// if( bord3 == "yes" ){
//     console.log("congratulation")
// }
// };

// //Chapter 11 (Comparison Operators)

// var card1 = 40;
// if (card1 !== "40" ){
//     console.log("Sorry")
// };

// var wheather = 25 ;
// if (wheather!== "25"){
//     console.log("today wheather is "+wheather)
// }

// // Chp 12 (if...else and else if statements)

// var Subject1 =parseFloat( prompt("Enter your Math Marks"));
// var Subject2 = parseFloat(prompt("Enter your Math Marks"));
// var Subject3 =parseFloat( prompt("Enter your Math Marks"));

// var total = Subject1 + Subject2 + Subject3;
// var persentage =(total/300)*100;
// var grade;

// if (persentage >= 85){
//     grade="A";
// }else if (persentage >= 75){
//     grade="B";
// }else if (persentage >= 65){
//     grade="C";
// }else {
//     grade = "Fail";
// }
// console.log (total);
// console.log (persentage);
// console.log (grade);

// // Chp 13 (Testing sets of conditions)

// var firstNumber = 5;
// var secondNumber = 10;

// if (firstNumber <= secondNumber || firstNumber >= secondNumber) {
//   alert("true");
// }

// // Chp 14 (If statements nested)

// var window1 = 7;
// var window2 = 7;

// if (window1 === window2) {
//     if (window1 <= window2) {
//         alert("Must window1 id equal to window2 ");
//     }
// }
// else{
//     console.log("Congratulation")
// }

// Chp 15 (Array I)

brr =['a','b','c'];
var screen1 = brr[1];
console.log(brr);
console.log(screen1);

// Chp 16 (Array II)

var arr = [1,2,3,4,5,6];
var maq = arr.pop();
console.log(arr)
console.log(maq)

var maq1 = arr.unshift("hey")
console.log (maq1)
console.log(arr)

// Chp 16 (Array III)

var pets = ["dog", "cat", "ox", "duck", "frog"];
var vets1 =pets.splice(1,2);
console.log(pets)

// Chp 17 - 20 (for Loops)

var Firstname = ["Ali", "huzaifa", "Shayan", "Ayyan",];
var fox = prompt("Enter first name");

for (var i = 0; i < Firstname.length; i++) {
    if (Firstname == fox[i]) {
        console.log("welcome");
    }
}

if (i == Firstname.length) {
    alert("User not found. Please try again.");
  }