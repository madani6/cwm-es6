const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk;
// console.log(walk);
walk();
// window
