// Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {
    // Only change code below this line
    var newArr = cities.slice(0,3);
    return newArr;
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
  
  console.log(nonMutatingSplice(inputCities));