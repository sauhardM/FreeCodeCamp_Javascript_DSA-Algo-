// DNA Pairing

function pairElement(str) {

    let newArr = [];
    
        for(var i=0;i<str.length;i++){
    
            switch(str[i]){
    
              case "G":
              newArr.push([str[i],"C"]);
              break;
    
              case "C":
              newArr.push([str[i],"G"]);
              break;
    
              case "A":
              newArr.push([str[i],"T"]);
              break;
    
              case "T":
              newArr.push([str[i],"A"]);
              break;
    
            }
    
        }
      
      return newArr;
    }
    
    pairElement("ATCGA");