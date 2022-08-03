// Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function(obj){
  
      obj.glide = function(){}
  }
  
  glideMixin(bird);
  glideMixin(boat);
  