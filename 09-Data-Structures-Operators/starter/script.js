'use strict';

// const arr = [2, 3, 4];
// let aa = arr[0];
// let bb = arr[1];
// let cc = arr[2];
// console.log(aa, bb, cc);

// const [x, y, z] = arr;
// console.log(x, y, z);

// Object Literals Enhancement.
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  // ES6 functions in Objects.
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // Before ES6 functions in objects
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderingPasta(ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderingPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // Looping over objects using keys.
// const propKeys = Object.keys(restaurant);
// console.log(propKeys);

// for (const restaurant_details of Object.keys(restaurant)) {
//   console.log(restaurant_details);
// }

// // Looping over objects using values.
// const propValues = Object.values(restaurant);
// console.log(propValues);

// for (const restaurant_values of Object.values(restaurant)) {
//   console.log(restaurant_values);
// }

// // Looping over objects using entries.
// const propEntries = Object.entries(restaurant);
// console.log(propEntries);

// // example looping over objects
// const openEntries = Object.entries(openingHours);

// for (const [key, { open, close }] of openEntries) {
//   console.log(`we open ${key} at ${open} and closes on ${close}`);
// }

// Before optional chaining.
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // After optional chaining.
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// // real world example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const openHour = restaurant.openingHours[day]?.open ?? `Closed for this day`;
//   console.log(openHour);
// }

// // Optional Chaining for Objects
// console.log(restaurant.order?.(0, 1) ?? 'Method does not Exist.');
// restaurant.orderDelivery?.(
//   {
//     time: '10',
//     address: 'india',
//     mainIndex: 0,
//     starterIndex: 1,
//   } ?? 'Method does not Exist.'
// );

// // Optional Chaining for Arrays
// const personArr = [
//   {
//     name: 'chaitu',
//     email: 'xyz@email.com',
//   },
//   {
//     name: 'rakesh',
//     email: 'zoo@zoom.com',
//   },
// ];

// console.log(personArr[0]?.name ?? 'name does not exist.');
// console.log(personArr[2]?.name ?? 'name does not exist.');

// Destructuring Arrays.
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// const [first, , , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // swaping two elements
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // destructuring return array elements
// const [item1, item2] = restaurant.order(2, 0);
// console.log(item1, item2);

// // Destructuring nested elements.
// const nested = [1, 2, [3, 4]];
// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

// // default values
// const [p = 1, q = 1, r = 1] = [3, 44];
// console.log(p, q, r);

// const { Name, openingHours, categories } = restaurant;
// console.log(Name, openingHours, categories);

// const {
//   Name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let e = 111;
// let f = 999;
// const obj = { e: 23, f: 7, g: 14 };
// ({ e, f } = obj);
// console.log(e, f);

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// spread opreator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newArr1 = [...arr, 1, 2];
// console.log(newArr1);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const [a, b, c, d, e] = [...newArr];
// console.log(a, b, c, d, e);

// // Shallow copy of menu arr
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 Arr
// const newjoinArr = [...newArr, ...mainMenuCopy];
// console.log(newjoinArr);

// const str = 'Jonas';
// const str1 = [...str];
// console.log(str1);

// // example
// const ingredients = [
//   // prompt("let's make pasta! ingredient1 ?"),
//   // prompt('ingredient2 ?'),
//   // prompt('ingredient3 ?'),
// ];
// console.log(ingredients);
// // restaurant.orderingPasta(...ingredients);

// // objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.Name);

// Rest operator, because on left side of =.
// const [a, b, ...other] = [1, 2, 3, 4];
// console.log(a, b, other);

// const [pizza, , risotto, ...otherFoodItems] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoodItems);

// // rest for objects
// const { sat, ...otherWeekDays } = restaurant.openingHours;
// console.log(sat, otherWeekDays);

// // rest for functions
// const add = function (...numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   console.log(total);
// };
// add(1, 2, 3, 4);
// const numArr = [334, 554, 1099];
// add(...numArr);

// // example
// restaurant.orderingPizza('Mushrooms', 'Onions', 'Olives', 'spinach');

// short-circuiting

// Short-Circuiting using OR.
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 'jonas');
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // short-Circuiting using AND.
// console.log(1 && restaurant.numGuests);
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello' && 23 && null && 'jonas');

// // practical example
// restaurant.orderingPizza && restaurant.orderingPizza('mushrooms', 'spinach');

// Null Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const correctGuests = restaurant.numGuests ?? 10;
// console.log(correctGuests);

// For-of Loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) {
//   console.log(item);
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const num of arr) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`);
// }
// console.log(menu.entries());
