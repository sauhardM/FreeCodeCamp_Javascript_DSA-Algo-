function confirmEnding(str, target) {
  
    var strLength = str.length;
    console.log(strLength);

    var targetLength = target.length
    console.log(targetLength);

    var result = str.substring(strLength- targetLength, str.length);
    console.log(result);

          if(result == target){

              return true;
          }


  return false;
}

confirmEnding("Bastian", "n");