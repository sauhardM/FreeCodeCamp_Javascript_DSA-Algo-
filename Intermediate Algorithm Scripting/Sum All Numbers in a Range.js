// Sum All Numbers in a Range

function sumAll(arr) {

    arr.sort((a,b) => a - b);
    var sum = 0;
    
          for(var i=arr[0]; i<=arr[1]; i++){
    
               sum += i;
    
                  if(i == arr[1]){
    
                      console.log(sum);
                      return sum;
                      
                  }
          }
      
    }
    
    sumAll([4, 1]);