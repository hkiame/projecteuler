let start = 1, 
    second = 2,
    current = 0,
    nums = 2,
    arr = [1, 2];

while(arr[arr.length - 1] < 4000000){
    current = start + second;
    start = second;
    second = current;
    arr.push(current);
}

arr.pop();

console.log(arr);

let result = arr.reduce((acc, curValue)=>{
    //console.log(curValue);
    if(curValue % 2 !== 0){
        curValue = 0;
    }

    return acc + curValue;
    
}, 0);

console.log(result);