//switch statement conditional value 

/* example syntax
switch(conditional value){
    case value1: 
        do something
        break;

    case value2: 
        do something else
        break;
    default:
        fall back on something else
}

//end each case with a break 
*/

let color = 'red';

switch(color) {
    case 'red':
        console.log('STOP');
        break;
    case 'yellow':
        console.log('GET READY');
        break;
    case 'green':
        console.log('GO');
        break;
    default:
        console.log('ERROR: INVALID INPUT')
        break;
}