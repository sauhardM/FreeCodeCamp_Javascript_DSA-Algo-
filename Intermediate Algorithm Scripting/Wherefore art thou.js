// Wherefore art thou

function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    const sourceKeys = Object.keys(source);
    console.log(sourceKeys);
  
          for (var i = 0; i < collection.length; i++) {
              let count = 0;
              // console.log(source[sourceKeys[i]]);
              // console.log(sourceKeys[i]);
              // console.log(collection[i][sourceKeys[i]])
  
              for (var j = 0; j < sourceKeys.length; j++) {
  
                      if (
                          collection[i].hasOwnProperty(sourceKeys[j]) &&
                          collection[i][sourceKeys[j]] === source[sourceKeys[j]]
                      ) {
                          count++;
                      }
              }
  
              if (count === sourceKeys.length) {
              arr.push(collection[i]);
              console.log(arr);
              }
          }
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  );
  