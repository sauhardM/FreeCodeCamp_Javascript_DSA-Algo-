// Use Prototype Properties to Reduce Duplicate Code

function Dog(name,color) {
    this.name = name;
    this.color = color;
    Dog.prototype.numLegs = 4;
  }
  
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  
  