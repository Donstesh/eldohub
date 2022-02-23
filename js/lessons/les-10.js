//for loop

for (let number = 1; number <= 10; number++){
    console.log(number);

}

for (let number = 1; number <= 5; number++){
    if(number === 3){
        continue; //skip the 3rd iteration and continue to the next one
    }
    if(number === 5){
        break;    //breaks
    }
    console.log(number);
}