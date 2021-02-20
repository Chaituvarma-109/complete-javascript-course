const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAvreageHumanAge = function (ages) {
  const humanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAge;
};
console.log(calcAvreageHumanAge(data1));
console.log(calcAvreageHumanAge(data2));
