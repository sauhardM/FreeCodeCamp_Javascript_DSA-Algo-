// Spinal Tap Case

function spinalCase(str) {

    for(var i=0;i<str.length;i++){
  
            if(str[i] === str[i].toUpperCase()){
  
                  str = str.substring(0, i) + ' ' + str.substring(i, str.length);
                  i++;
            }
    }
  
    str = str.replace(/\s/g,"-");
    str = str.split(/[^a-zA-Z]/g).join("-").toLowerCase();
    
    for(var j=0;j<str.length;j++){
      
          if(str[0] === "-"){
  
             str = str.replace("-","");
          }
  
          if(str[j] === "-" && str[j+1] === "-"  ){
  
              str = str.substr(0, j) + str.substr(j+1);
              j--;
          }
    }
  
  return str;

}
  
  spinalCase("thisIsSpinalTap");