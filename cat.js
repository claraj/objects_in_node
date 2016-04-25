

Cat = function(name, age) {
  this.name = name;
  this.age = age;
}


Cat.prototype.meow = function() {
  console.log(this.name + ' says meow')
}

Cat.prototype.setName = function(newName) {
  this.name = newName;
}

Cat.prototype.getAge = function() {
  return this.age;
}

module.exports = Cat;
