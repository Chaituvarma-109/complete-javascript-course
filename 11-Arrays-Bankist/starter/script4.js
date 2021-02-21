const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

const dogSarah = dogs.find(owner => owner.owners.includes('Sarah'));
if (dogSarah.curFood < dogSarah.recommendedFood * 0.9) {
  console.log('eating too little');
} else if (dogSarah.curFood > dogSarah.recommendedFood * 1.1) {
  console.log('eating too much');
}

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooLittle}'s dogs eat too much!`);
console.log(ownersEatTooMuch);
console.log(`${ownersEatTooMuch}'s dogs eat too much!`);
