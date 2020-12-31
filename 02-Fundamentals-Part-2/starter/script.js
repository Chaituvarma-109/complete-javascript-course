'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }

// if (hasDriversLicense) { console.log('I can drive :D'); }

// const interface = 'Audio';

// const private = 534;

// functions

// function logger() {
//     console.log('My name is Chaitu');
// }

// logger();


// function addition(a, b) {
//     let sumRes = a+b;
//     // console.log(c);
//     return sumRes;
// }

// addition(2,3);

// function multiplication(a, b) {
//     let d = addition(12, 35);
//     let c = (a * b)+d;
//     return c;
// }

// const res = multiplication(5,4);
// console.log(res);

// function declaration
// function calcAge1(birthYear) {
//     return 2050 - birthYear;
// }

// console.log(calcAge1(1992));

// function expression
// const marriageDate = function (marriage){
//     return marriage;
// }

// console.log(marriageDate(12));

// Arrow functions
const marriageDate = function (birthYear){
        return 2037-birthYear;
    }

console.log(marriageDate(1992));
 
const calcAge2 = birthYear => 2037 - birthYear;  // This function is called as Arrow Function.

console.log(calcAge2(1992));

