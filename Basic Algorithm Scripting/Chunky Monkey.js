// Chunky Monkey

function chunkArrayInGroups(arr, size) {

    var splicedArr ;
    let newArr = [];
    
            for(var i=0;i<=arr.length || i>arr.length;i++){
    
                  console.log(arr.length);
    
                  if(arr.length>=size){
    
                       splicedArr = arr.splice(0,size);
                       console.log(arr);
                       newArr.push(splicedArr);
                       console.log(newArr);
    
                              if(arr.length == 0){
    
                                    console.log(newArr);
                                    return newArr;
    
                              }      
    
                  }else if(arr.length<size) {
    
                        console.log(arr.length);  
                        splicedArr = arr.splice(0,arr.length);
                        console.log(splicedArr);
                        newArr.push(splicedArr);
                        console.log(newArr);
                        break;
    
                  }
    
            }
    
      return newArr;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);