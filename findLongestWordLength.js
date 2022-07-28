function findLongestWordLength(str) {

    var words = [];  
    var countSpace = 0;
    var longestWord = "";
    words[countSpace] = "";

        for(var i=0;i<str.length;i++){

               if(str[i] != " ") {

                    // console.log(countSpace);
                    words[countSpace] += str[i];
                    // console.log(words)

              }else if(str[i] == " ") {

                       countSpace++;
                       words[countSpace] = "";
                      //  console.log(countSpace);
              }
        }             
                    const asc = words.sort((a,b) => a.length - b.length);
                    longestWord = asc.pop();
                    console.log(longestWord.length);

    /*The code below will also find the same results as the one above....                
                    console.log(words.sort());
                     words.forEach(function(word) {
                      if(word.length > longestWord.length) {
                        longestWord = word;
                      }
                    });
    
                    console.log(longestWord.length);
                    return longestWord.length;*/
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog"); 
