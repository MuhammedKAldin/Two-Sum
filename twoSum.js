var twoSum = function(num, target) {
    let arrAnswers = [] 
     num.map(function(val,index)
     {
         for( var i = 0; i < num.length; i++ )
         {
            if(val + num[index + i] == target && index != index + i ) {
                arrAnswers.push(index);
                arrAnswers.push(index + i);
            }
         }
     });
    return arrAnswers;  
};
