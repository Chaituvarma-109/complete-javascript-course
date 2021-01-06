'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `${firstName} you are a millenial.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     add(2, 3);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Chaitu';
// calcAge(1992);

// Hoisting and TDZ

// Variables

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1992;

// // Function

// console.log(addDecl(4, 5));
// // console.log(addExpr(5, 5));
// // console.log(addArrow(6, 5));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(addExpr(5, 5));
// console.log(addArrow(6, 5));

// var z = 12;
// let x = 10;
// const y = 11;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  const age = 2050 - birthYear;
  console.log(this);
  return age;
};

console.log(calcAge(1992));

const calcAgeArrow = birthYear => {
  const age = 2050 - birthYear;
  console.log(this);
  return age;
};

console.log(calcAgeArrow(1992));

const Jonas = {
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2040 - this.year);
  },
};
Jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Jonas.calcAge;

matilda.calcAge();

const f = Jonas.calcAge;
f();
