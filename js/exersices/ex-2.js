/* 
    write an if statement for a trafic light system
    if color is Green - GO
    if color is Yellow - Get Ready
    if color is Red - Stop
*/

let color = 'blue';

if(color === 'Green' || color === 'green'){
    console.log('Go');
}else if(color === 'Red' || color === 'red'){
    console.log('Stop');
}else if(color === 'Yellow' || color === 'yellow'){
    console.log('Get Ready')
}
else{
    console.log('Not Applicable');
}