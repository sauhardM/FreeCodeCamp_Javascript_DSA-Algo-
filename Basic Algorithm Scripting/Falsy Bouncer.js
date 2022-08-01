// Falsy Bouncer

function bouncer(arr) {
  
    for(var i=0;i<arr.length;i++){

          
              if(!arr[i]){

                  arr.splice(i,1);
                  console.log(i);
                  i--;
                  console.log("falseElem");

              }
    }

console.log(arr);
return arr;
}

bouncer([null, NaN, 1, 2, undefined]);