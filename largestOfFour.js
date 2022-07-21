function largestOfFour(arr) {

    var largestArr = [];
          for(var i=0;i<arr.length;i++){
    
                  arr[i].sort(function(a, b){return a-b});
                 /* The code below will also find the last element
                  console.log(arr[i][arr[i].length - 1]); */
                  largestArr.push(arr[i].pop());
                  console.log(largestArr);
    
          }
      return largestArr;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);