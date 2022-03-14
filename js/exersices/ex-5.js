//use for loop to print prime numbers upto 23

// 

for(let i=0; i<=23; i++){
    let count = 0
    
    for(let j =1; j<=i; j++){
        if(i%j ===0 ){
            count++
            
        }
    }
    if(count===2){
        console.log(i)
    }
}