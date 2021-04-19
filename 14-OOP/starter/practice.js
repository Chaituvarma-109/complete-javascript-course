'use strict';

function Employee(nameOfEmployee, department, dateOfJoin, termination) {
  this.EmployeeName = nameOfEmployee;
  this.dept = department;
  this.joiningDate = dateOfJoin;
  this.terminationDate = termination;
}

Employee.prototype.experience = function () {
  console.log(this.joiningDate - this.terminationDate);
};

const rakesh = new Employee('Rakesh', 'CSE', 2013, 2021);
rakesh.experience();
//---------------------------------------------------Coding Challenge # 1-----------------------------------------------------------------
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.break = function () {
  console.log(this.speed - 5);
};

const c1 = new Car('BMW', 120);
const c2 = new Car('Mercedes', 95);

c1.accelerate();
c2.accelerate();

c1.break();
c2.break();

//---------------------------------------------------Coding Challenge # 2-----------------------------------------------------------------

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(this.speed + 10);
  }

  break() {
    console.log(this.speed - 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedkm) {
    this.speed = speedkm * 1.6;
  }
}
const Car23 = new CarCl('Ford', 120);
console.log(Car23.speedUS);
Car23.accelerate();
Car23.speedUS = 50;
console.log(Car23.speed);
