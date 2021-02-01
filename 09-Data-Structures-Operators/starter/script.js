'use strict';

const arr = [2, 3, 4];
let aa = arr[0];
let bb = arr[1];
let cc = arr[2];
console.log(aa, bb, cc);

const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
};

// const [first, second] = restaurant.categories;
// console.log(first, second);

const [first, , , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swaping two elements
[main, secondary] = [secondary, main];
console.log(main, secondary);

// destructuring return array elements
const [item1, item2] = restaurant.order(2, 0);
console.log(item1, item2);

// Destructuring nested elements.
const nested = [1, 2, [3, 4]];
const [a, b, [c, d]] = nested;
console.log(a, b, c, d);

// default values
const [p = 1, q = 1, r = 1] = [3, 44];
console.log(p, q, r);
