function truncateString(str, num) {

    console.log(str.length);
    console.log(num);   // Num here in the parameter is a integer only, so be careful while using if and for condition with "num.length" 
    //Because if the second parameter already consist num.length and if you try to "console.log(num.length) it will print "undefined".
    
    var temp = "";
    
        if(num < str.length){
    
              for(var i=0;i<num;i++){
    
                      // console.log(str[i]);
                      temp += str[i];
              }
    
        temp += "..." 
        console.log(temp);     
        return temp;
    
        } else if(num == str.length || num > str.length) {
    
              console.log(str)
              return str;
        }
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);