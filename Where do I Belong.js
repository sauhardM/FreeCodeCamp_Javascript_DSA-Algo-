// Where do I Belong

function getIndexToIns(arr, num) {

    arr = arr.sort((a,b) => a - b);
    console.log(arr);
    
          for(var i=0;i<arr.length;i++){
    
                  if(arr[i] >= num){
    
                      console.log(arr);
                      console.log(i);
                      console.log(arr[i])
                      return i;
    
                  }else if(arr[arr.length-1] < num){
    
                            arr.push(num);
    
                  }
          }

      return 0;
}
    
    getIndexToIns([5, 3, 20, 3], 25);