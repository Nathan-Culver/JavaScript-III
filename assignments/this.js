/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global: "this" points to the window object. 
* 2. Implicit: "this" points to the object before the dot. 
* 3. New: "this" is set within a constructor function and points to the created object. 
* 4. Explicit: "this" points to instance that JavaScript’s call/apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let sayAge = function() {
  console.log(this.name);
  console.log(this.age);
};

let me = {
  name: "Nathan",
  age: 30
};

sayAge();

// Principle 2

// code example for Implicit Binding

let Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(`Hello, my name is ${this.name}.`);
    },
    josh: {
      name: "Josh", 
      age: age,
      sayName: function() {
      console.log(`I'm ${this.name}.`);
      }
    },
      steven: {
        name: "Steven", 
        age: age,
        sayName: function() {
          console.log(`Nice to meet you two. My name is ${this.name}.`);
      }
    }
  };
};

let nathan = Person("Nathan", 30);
nathan.sayName();
nathan.josh.sayName();
nathan.steven.sayName();

// Principle 3

// code example for New Binding

let Person = function(name, age, race) {
  this.name = name;
  this.age = age;
  this.race = race;
};

let mike = new Person("Mike", "40", "White");

console.log(mike);

// Principle 4

// code example for Explicit Binding

let sayName = function(game1, game2, game3) {
  console.log(`Hello. My name is ${this.name}. I love playing ${game1}, ${game2}, and ${game3}`);
};

let nathan = {
  name: "Nathan",
  age: 30
};

let games = ["MTGA", "EU4", "Ark"];

sayName.call(nathan, games[0], games[1], games[2])

sayName.apply(nathan, games)

let newFn = sayName.bind(nathan, games[0], games[1], games[2])
newFn();