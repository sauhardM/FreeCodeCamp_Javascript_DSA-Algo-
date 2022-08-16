// Spinal Tap Case

function spinalCase(str) {

    for(var i=0;i<str.length;i++){
  
            if(str[i] === str[i].toUpperCase()){
  
                  // console.log(i)
                  str = str.substring(0, i) + ' ' + str.substring(i, str.length);
                  i++;
                  // console.log(str[i]);
                  // console.log(str);
            
            }
    }
  
    str = str.replace(/\s/g,"-");
    str = str.split(/[^a-zA-Z]/g).join("-").toLowerCase();
    console.log(str);
    
    for(var j=0;j<str.length;j++){
      
          if(str[0] === "-"){
  
            //  console.log(str);
             str = str.replace("-","");
             console.log(str);
          }
  
          if(str[j] === "-" && str[j+1] === "-"  ){
  
              console.log("found at " + j);
              console.log(str);
              str = str.substr(0, j) + str.substr(j+1);
              j--;
              console.log(str);
              
              
          }
    }
  
  
  // console.log(str);
  
  return str;
  }
  
  spinalCase("thisIsSpinalTap");