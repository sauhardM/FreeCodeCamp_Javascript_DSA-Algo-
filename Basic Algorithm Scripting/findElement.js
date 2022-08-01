function findElement(arr, func) {
    let num = 0;
  
        for(var i=0;i<arr.length;i++){
  
              num = arr[i];
              console.log(num);
              console.log(func(num));
              var truthTest = func(num);
  
                  if(truthTest == true){
  
                      console.log(num);
                      return num;
                  }
  
        }
    
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);