// Title Case a Sentence

function titleCase(str) {

    var convArr = str.split(" ",str.length);
    
          for(var i=0;i<convArr.length;i++){
    
             convArr[i] = convArr[i].substring(0,1).toUpperCase() +
                          convArr[i].substring(1,convArr[i].length).toLowerCase();
          }
    
    
          convArr = convArr.join(" ");
          console.log(convArr);
          return convArr;
    }
    
    titleCase("I'm a little tea pot");