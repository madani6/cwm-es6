const person = {
  name: "Mosh"
};

class Person {
  constructor(name) {
    webpackHotDevClient.this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

// const person = new Person("Mosh");
// person
//   const person2 = {
//     name: 'Mosh',
//     walk() {
//         console.log("walk");
//     }
// };
