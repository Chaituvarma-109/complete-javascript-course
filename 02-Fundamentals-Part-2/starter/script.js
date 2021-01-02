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
// const marriageDate = function (birthYear){
//         return 2037-birthYear;
//     }

// console.log(marriageDate(1992));
 
// const calcAge2 = birthYear => 2037 - birthYear;  // This function is called as Arrow Function.

// console.log(calcAge2(1992));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037- birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1992, 'chaitu'));

// function calling from another function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {

//     const applePieces =  cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// };

// console.log(fruitProcessor(2,3));

// Arrays

// const friends = ['chaitu','bunny','vasu'];

// console.log(friends)

// console.log(friends[2]);

// console.log('length of friends:', friends.length);

// const years = new Array(1992, 2020, 1985);

// console.log(years);

// console.log(years[1]);

// const age = new Array(22,34,'varma');

// console.log(age);

// friends[2] = 'Dinesh';

// friends[3] = 'Bhanu';

// console.log(friends);

// let city = 'bhimavaram';

// const chaitu = ['Indra', 2021, 'jan', friends,'schmit',1864,city];

// console.log(chaitu);

// const calcAge = function(birthYear) {
//     return birthYear - 2024;
// }

// const years = [1991,1885,1794,200];

// let res = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

// console.log(res);

const friends = ['chaitu', 'bunny', 'vasu'];
const newLength = friends.push('veera');
friends.push('rakesh');

console.log(friends);
console.log(newLength);

friends.unshift('john');

console.log(friends);

friends.pop();
const poppedEle = friends.pop();
console.log(friends);
console.log(poppedEle);