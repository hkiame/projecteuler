let num1 = Number(999), num2 = Number(999), arr = [];

function multiply(first, second){
    let result = Number(first * second);

    let reversed = Number(result.toString().split("").reverse().join(""));
    if(reversed === result){
        return result;
    }

    return false;
}


// function recursive(first, second){

//     // if(first < 100 && second > 100){
//     //     first = num1;
//     //     num2 -= 1;
//     //     second = num2;
//     // }else if(second < 100){
//     //     return;
//     // }

//     // let result = multiply(first, second);
    
//     // if(!result){
//     //     first--;
//     //     recursive(first, second);
//     // }else{
//     //     console.log(first, second);
//     //     console.log(result);
//     //     return;
//     // }
//     if(first < 100 || second < 100){
//         return;
//     }

//     let result = multiply(first, second);
//     console.log(`first ${first} : second ${second}`);

//     if(!result){
//         if(first === second){
//             first -= 1;
//             second = num2;
//         }else{
//             second -= 1;
//         }
        
//         recursive(first, second);
//     }else{
//         console.log(result);
//     }

// }

//recursive(num1, num2);
//first = num1;
//second = num2;
for(let i = num1; i >= 100; i--){
    for(let j = num2; j >= 100; j--){
        let result = multiply(i, j);
        if(result){
            //console.log(result);
            //break;
            arr.push(result);
        }
    }
}

console.log(Math.max(...arr))