// Mutations

function mutation(arr) {

    console.log(arr[0].length);
    console.log(arr[1].length);
    var elemCount = 0;
    
        for(var i=0;i<arr[1].length;i++){
    
               console.log( "arr[1] index "+ i + " "+ arr[1][i].toLowerCase());
              
    
                  for(var j=0;j<arr[0].length;j++){
    
                          console.log(arr[0][j] + " "+ j);
                          // console.log(arr[1][i])  
                          if(arr[1][i].toLowerCase() == arr[0][j].toLowerCase()){
    
                                elemCount++;
                                console.log("element count value here is " + elemCount);
                                break;
    
                          }
                          
                  }
    
                if(elemCount == arr[1].length){

                        return true; 
                }
    
        }
    
      console.log(elemCount);
    
      return false;
    }
    
mutation(["hello", "Hello"]);