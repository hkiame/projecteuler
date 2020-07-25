let start = 1, end = 20, num = 2520, flag = false;


while(!flag){
    let innerFlag = false;
    for(let i = start; i <= end; i++){
        if(i === end){
            flag = true;
        }

        if(num % i !== 0){
            innerFlag = true;
            break;
        }
    }
   
    if(innerFlag){
        num += 1;
    }
    
    
}

console.log(num);