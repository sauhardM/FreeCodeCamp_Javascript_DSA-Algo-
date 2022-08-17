// Search and Replace

function myReplace(str, before, after) {

    str = str.split(" ");
  
        for(var i=0;i<str.length;i++){
  
              if(str[i] === before && str[i][0] === str[i][0].toLowerCase()){
  
                  after = after.substr(0,1).toLowerCase() + after.substr(1,after.length);
                  str[i] = str[i].replace(str[i], after);
                  str = str.join(" ");
                  
              }else if(str[i] === before && str[i][0] === str[i][0].toUpperCase()){
  
  
                   after = after.substr(0,1).toUpperCase() + after.substr(1,after.length);
                   str[i] = str[i].replace(str[i], after);
                   str = str.join(" ");
              }
        }
    return str;
  }
  
  myReplace("I think we should look up there", "up", "Down");