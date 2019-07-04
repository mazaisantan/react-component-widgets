/*  
功能：实现全排列功能 
参数： 
source--整数数组，存放需要全排列的元素 
begin --查找一个排列的开始位置 
end   --查找一个排列的结束位置，当begin=end时，表明完成一个排列 
*/  

var getFullPermutation = (function(){
    let fullPermutation = [],fixedBegin = undefined;
    return function(source,begin,end)  
    {  
        let temp = [];
        if(fixedBegin == undefined){//保存第一次调用时的起始坐标
            fixedBegin = begin;
        }
        function swap(source,i,j){
            let temp = source[i];
            source[i] = source[j];
            source[j] = temp;
        }
        if (begin > end) // 找到一个排列  
        {  
            fullPermutation.push(source.slice(fixedBegin,end));  
            temp = fullPermutation;
        }  
        else// 没有找完一个排列，则继续往下找下一个元素  
        {  
            for (let i = begin; i <= end; i++)  
            {  
                if (begin != i)  
                {  
                    swap(source,begin,i); // 交换  
                }  
    
                // 递归排列剩余的从begin+1到end的元素  
                getFullPermutation(source, begin + 1, end);  
                if (begin != i)  
                {  
                    swap(source,begin,i); // 回溯时还原  
                }   
            }  
        }
        if(fixedBegin == begin){
            temp = fullPermutation;
            fullPermutation = [];
            fixedBegin =undefined;
            return temp;
        }
    }
}());


function deepClone(obj){
    var newObject = obj.constructor === Array ? []:{};
    if(typeof obj != 'object'){
        return;
    }else{
        for(let i = 0;i < obj.length;i++){
            newObj[i] = typeof obj[i] =='object' ? deepClone(obj[i]):obj[i]; 
        }
        console.log(newObject);
        return newObject;
    }
}

export deepClone
export getFullPermutation