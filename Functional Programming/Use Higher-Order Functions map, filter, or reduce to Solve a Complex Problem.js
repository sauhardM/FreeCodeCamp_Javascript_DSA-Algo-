// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
    // Only change code below this line
  
    
    return arr.map(array => array).filter(array => Number.isInteger(array) == true && array >= 0).reduce((previousVal,array) => previousVal.concat(Math.pow(array,2)) ,[]);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  var arr = [-3, 4.8, 5, 3, -3.2];
  console.log(squaredIntegers);