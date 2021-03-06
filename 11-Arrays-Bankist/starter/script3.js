const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAvreageHumanAge = ages => {
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};

const avg1 = calcAvreageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAvreageHumanAge(data2);
console.log(avg1);
console.log(avg2);
