// Seek and Destroy

function destroyer(arr) {

    console.log(arr);
    console.log(arguments[1]);
    console.log(arguments[2]);
    const args = [...arguments];
    console.log(args);
    
        for(var i=0;i<arr.length;i++){
    
            for(var j=1;j<args.length;j++){
    
    
                    if(arr[i] === args[j]){
                        
                        console.log("current index value "+ arr[i]);
                        arr.splice(i,1);
                        i--;
                        console.log(i);
                        console.log(arr);
                    }
            }     
        }
      return arr;
    }
    
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);