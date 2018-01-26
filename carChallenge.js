let car = (make, year, color, maxSpeed) => {
  var speed = 0;
  return {
    make:make,
    year:year,
    color:color,
    maxSpeed:maxSpeed,
    carDetails: () => {
      return `The car is a${make}, made in ${year}, and is ${color}`
    },
    getSpeed: () => {
      return speed
    },
    setSpeed: (x) => {
      speed = x;
      return speed;
    },
    accelerate: () => {
      speed += 10
    },
    brake: () => {
      speed -= 7
    }
  }
}
let car2 = car("Mazda", 2012, "black", 85);

console.log("Our car: ", car2);

while(car2.getSpeed() < 70) {
  car2.accelerate()
}

console.log("Our speed after accelerating: ", car2.getSpeed());

while(car2.getSpeed() > 0) {
  car2.brake()

  if (car2.getSpeed() - 7 < 0){
       car2.setSpeed(0);
  }
}

console.log("Our speed after braking: ", car2.getSpeed());

while(car2.getSpeed() < 85) {
  car2.accelerate()
  if (car2.getSpeed() > car2.maxSpeed) {
    car2.setSpeed(car2.maxSpeed)
  }
}

console.log("Our speed after trying to accelerate to 90: ", car2.getSpeed());
