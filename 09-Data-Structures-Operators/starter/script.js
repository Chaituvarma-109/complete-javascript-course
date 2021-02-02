'use strict';

// const arr = [2, 3, 4];
// let aa = arr[0];
// let bb = arr[1];
// let cc = arr[2];
// console.log(aa, bb, cc);

// const [x, y, z] = arr;
// console.log(x, y, z);

const restaurant = {
  Name: 'Classico Italiano',
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
  orderingPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1} ${ing2} ${ing3}`);
  },
  orderingPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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
