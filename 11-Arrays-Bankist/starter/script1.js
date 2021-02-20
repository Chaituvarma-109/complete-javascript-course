`use strict`;

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];
const dogsJuliaShallow = dogsJulia.splice(1, 3);
const combinedDogsAges = dogsJuliaShallow.concat(dogsKate);

combinedDogsAges.forEach((dogsAge, index) => {
  if (dogsAge >= 3) {
    console.log(
      `Dog number ${index + 1} is an adult, and is ${dogsAge} years old`
    );
  } else {
    console.log(
      `Dog number ${index + 1} is an puppy, and is ${dogsAge} years old`
    );
  }
});
