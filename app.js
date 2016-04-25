//Require the Cat prototype
var Cat = require('./cat.js');

//Create some Cat objects
fluffy = new Cat('fluffy', 6);
kitty = new Cat('kitty', 3);

//Check to see if the methods defined work...
fluffy.meow();

fluffy.setName("Super fluffy");

fluffy.meow();

//And make sure Fluffy and Kitty have their own value of the variables
console.log(fluffy.name + " is " + fluffy.age);

kitty.meow();

console.log(kitty.name + " is " + kitty.age);
