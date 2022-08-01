// Slice and Splice

function frankenSplice(arr1, arr2, n) {

    let newArr = arr2.slice(0,arr2.length);
    console.log(newArr);
    
  
          for(var i=arr1.length-1;i>=0;i--){
  
              newArr.splice(n,0,arr1[i]);
              console.log(newArr);
  
          }
  
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);