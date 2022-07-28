function repeatStringNumTimes(str, num) {

    var temp = "";
    
            for(var j=0;j<num;j++){
    
                  temp += str;
                  console.log(temp);
           }
      return temp;
    }
    
    repeatStringNumTimes("abc", 3);