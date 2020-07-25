let num = 13195;
let factors = [];


function recursive(n, start){
    if(n < start){
        return;
    }

    if(n % start === 0){
        factors.push(start);
        recursive(n/start, 2);
    }else{
        start++;
        recursive(n, start);
    }
}

recursive(600851475143, 2);

console.log(Math.max(...factors));