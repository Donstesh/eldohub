/* 
    write an if statement to print:
        senior citizen if somebody is between the age - 35+
        print youth if age is between 20 - 34
        teenage if somebody is between 13 -19 
        toodle < 13 years
*/

let age = 36;

if (age > 35){
    console.log(`This citizen of age ${age} is a senior citizen`);
}else if (age >= 20){
    console.log(`This citizen of age ${age} is a Youth`);
}else if (age >= 13){
    console.log(`This citizen of age ${age} is a Teenager`);
}else {
    console.log(`This citizen of age ${age} is a Toddler`);
} 