// Pig Latin

function translatePigLatin(str) {

    switch(str[0]){

        case "a":
        str =  str+"way";
        break;

        case "e":
        str =  str+"way";
        break;

        case "i":
        str =  str+"way";
        break;

        case "o":
        str =  str+"way";
        break;

        case "u":
        str =  str+"way";
        break;

        default:
        if(/[aeiou]/.test(str)){

            for(var i=0;i<str.length;i++){

                if(/[aeiou]/.test(str[i])){

                  str = str.substr(i,str.length)+ str.substr(0,i) + "ay";
                  break;
                }
            }
            
        }else{

        str = str + "ay";
    }
        

    }

   return str;
}

translatePigLatin("glove");