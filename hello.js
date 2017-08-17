function calcTwo(arr){
          let array = arr.reduce(function(preValue, curValue){
                    preValue.push(Pow(curValue, 2));
                    return preValue;
          });
}