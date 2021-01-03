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

// const friends = ['chaitu', 'bunny', 'vasu'];
// const newLength = friends.push('veera');
// friends.push('rakesh');

// console.log(friends);
// console.log(newLength);

// friends.unshift('john');

// console.log(friends);

// friends.pop();
// const poppedEle = friends.pop();
// console.log(friends);
// console.log(poppedEle);

// Objects 

// const userBioData = {
//     firstName: 'Chaitanya',
//     lastName: 'Varma',
//     Age: 22,
//     Proper: 'Andhra Pradesh',
//     Country: 'India',
//     friends: ['rakesh','srinu','chintu']
// };

// console.log(userBioData['firstName']);

// console.log(userBioData.Country);

// const nameKey = 'Name';
// console.log(userBioData['first'+nameKey]);
// console.log(userBioData['last'+nameKey]);

// const interestedIn = prompt(`Which user information do you want to know. Enter the Firstname or lastname or age or proper or country.`);

// console.log(userBioData[interestedIn]);

// if (userBioData[interestedIn]) {
//     console.log(userBioData[interestedIn]);
// }
// else {
//     console.log('wrong! please choose another Option');
// }

// userBioData.job = 'Software Developer.'
// userBioData['salary'] = 22334;
// console.log(userBioData);

// console.log(`${userBioData.firstName} has ${userBioData.friends.length} and his best friend is ${userBioData.friends[0]}.`);

// const userBioData = {
//         firstName: 'Chaitanya',
//         lastName: 'Varma',
//         birthYear: 1992,
//         job : 'teacher',
//         Proper: 'Andhra Pradesh',
//         Country: 'India',
//         friends: ['rakesh','srinu','chintu'],
//         hasDriversLicense: false,

        // calcAge: function(birthYear) {
        //     return 2037 - birthYear;
        // }

        // calcAge: function() {
        //     return 2037 - this.birthYear;
        // }

//         calcAge: function() {
//             this.age = 2037 - this.birthYear;
//             return this.age;
//         },

//         getSummary : function() {
//             return `${this.firstName+this.lastName} is a ${this.age} old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} Driver's License.`;
//         }
//     };

// console.log(userBioData.calcAge());
// // console.log(userBioData['calcAge'](1992));

// console.log(userBioData.age);

// // challenge

// console.log(userBioData.getSummary());

// For Loops

// for  (let rep = 1; rep < 11; rep++) {
//     console.log(`repetitions of this execercise ${rep}`);
// }

// const chaitu = ['Indra', 2021, 'jan', ['rakesh','srinu','chintu'],'schmit',1864,'Bhimavaram'];

// for(let arr=0; arr<chaitu.length;arr++) {
//     if (typeof(chaitu[arr]) === "object"){
//         let Arr = chaitu[arr];
//         for(let i=0; i<Arr.length;i++){
//             console.log(Arr[i]);
//         }
//     }
//     else{console.log(chaitu[arr]);}
// }

// const types = [];

// for(let arr=0; arr<chaitu.length;arr++){
//     //types[arr] = typeof (chaitu[arr]);

//     types.push(typeof chaitu[arr]);
// }

// console.log(types)

// const birthYear = [1992, 1864, 1666, 1758];

// const age = [];

// for (let year = 0; year<birthYear.length; year++){
//     age.push(2037-birthYear[year]);
// }

// console.log(age)

// for (let ind=chaitu.length-1; ind>=0; ind--){
//     console.log(chaitu[ind]);
// }

// for (let execercise = 1; execercise < 4; execercise++){
//     console.log(`-----Starting Excercise ${execercise}`);

//     for (let rep = 1; rep<6; rep++){
//         console.log(`Lifting weight repetition ${rep}`);
//     }
// }

// while loop

// let dice = Math.trunc(Math.random()*6)+1;

// console.log(dice);

// while(dice!=6){
//     console.log(`You rolled dice of value ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
// }