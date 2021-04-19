'use strict';

//----------------------------------------------------Constructor Functions and the new Operator------------------------------------------

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.name = firstName;
  this.year = birthYear;

  // Never define methods in the constructor function
  //   this.calcAge = function () {
  //     return 2037 - this.year;
  //   };
};

const chaitu = new Person('Chaitanya', 1992);
// console.log(chaitu.calcAge());
console.log(chaitu);

const jonas = new Person('Jonas', 1999);
const matilda = new Person('Matilda', 2000);

console.log(jonas, matilda);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

//---------------------------------------------------------------Prototypes---------------------------------------------------------------
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.year);
};
chaitu.calcAge();

console.log('jonas', jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(chaitu));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// Setting properties
Person.prototype.species = ['Homosapiens', 'Humans'];
console.log(chaitu.species[0], matilda.species[1]);

// checking object has its own properties.
console.log(chaitu.hasOwnProperty('name'));
console.log(chaitu.hasOwnProperty('species'));
chaitu.lastName = 'varma';
console.log(chaitu);

//----------------------------------------------Prototypal Inheritance on Built-In Objects------------------------------------------------
console.log(chaitu.__proto__);
// object prototype
console.log(chaitu.__proto__.__proto__);
console.log(chaitu.__proto__.__proto__.__proto__);

console.dir(chaitu.__proto__.constructor);

const arr = [3, 2, 4, 6, 78, 22, 4, 6, 78]; // [] === new Array()
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
//---------------------------------------------------ES6 Classes--------------------------------------------------------------------------
// Class Expression
const PersonC1 = class {};

// Class declaration
class PersonCl {
  constructor(fullName, age, height, weight) {
    this.fullName = fullName;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  get birthYear() {
    return 2021 - this.age;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${fullName} already exists`);
  }

  get fullName() {
    return this._fullName;
  }
}

const bunny = new PersonCl('Jonas Davis', 24, 160, 70);
console.log(bunny);
console.log(bunny.birthYear);

const walter = new PersonCl('walter White', 22, 160, 70);
//---------------------------------------------------------Setters and Getters------------------------------------------------------------
const account = {
  owner: 'Jonas',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(...movement);
  },
};

console.log(account.latest);

account.latest = [20, -300];
console.log(account.movements);
//---------------------------------------------------------Object.Create------------------------------------------------------------------
const PersonProto = {
  calcAge() {
    console.log(2037 - this.year);
  },

  init(firstName, year) {
    this.firstName = firstName;
    this.year = year;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.year = 1992;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
//----------------------------------------------Inheritance Between Classes: Constructor Functions----------------------------------------
const Person1 = function (firstName, birthYear) {
  // Instance Properties
  this.name = firstName;
  this.year = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2037 - this.year);
};

const Student = function (firstName, birthYear, course) {
  this.name = firstName;
  this.year = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
