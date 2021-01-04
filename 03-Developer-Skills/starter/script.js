// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1992));

// let temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// let temp1 = [22, 1, 44, 'error', -10, 0, 10, 19, 24, 33, 30];

// let mergeTemp = temp.concat(temp1);
// console.log(mergeTemp);
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);

//   let amplitudeDiff = max - min;

//   return amplitudeDiff;
// };

// console.log(calcTempAmplitude(mergeTemp));

// debugging
const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    value: prompt('Degree celsius: '),
  };
  console.table(measurement);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
