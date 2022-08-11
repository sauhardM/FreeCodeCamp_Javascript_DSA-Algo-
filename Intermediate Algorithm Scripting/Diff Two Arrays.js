// Diff Two Arrays

function diffArray(arr1, arr2) {
    var newArr = [];
    var count = 0;
    // console.log( arr1.length);
      if(arr1.length != 0 ){
  
          for(var i=0;i<arr1.length;i++){
              
                for(var j=0;j<arr2.length;j++){
  
                      if(arr1[i] == arr2[j]){
  
                          arr2.splice(j,1);
                          arr1.splice(i,1);
                          count++;
                          i--;
                          if(arr1 || arr2 == []){
  
                              newArr = arr1.concat(arr2);
                          }
                          console.log(newArr);
  
                      } 
                } 
          } if(count == 0){
  
                newArr = arr1.concat(arr2);
                console.log(newArr);
                return newArr;
          }
  
      }else if(arr1.length == 0){
  
          console.log(arr2);
          return arr2;
      }   
    // console.log(arr2);
    return newArr;
  }
  
  diffArray([1, "calf", 3, "piglet"], [7, "filly"]);