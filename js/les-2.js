/*

multi line comment
use various comments

*/

//variables
let name = 'Stephen';
let age = 10;
let gender;  //defining without initializing 

gender = 'Male'; //initializing the var

console.log(name);
console.log(age);
console.log(gender);

//string combination

console.log('My name is ' + name + 'I am ' + age + 'years old and I am a boy');

//template literals
console.log(`My name is ${name}. I am ${age} years old. And I am a boy`);
//variable updating 
// when udating a variable we dont use the key word to define the variable

age = 11;
console.log(age);

//const used to assign variabls that are unchangable

const yearOfBirth = 2022;
console.log(yearOfBirth);

// yearOfBirth = 2013;
// console.log(yearOfBirth);

/*
    variable name should be :-
        1. simple and descriptive.
        2. camelcase if it contains more than one word.

    why use variables
        1. represent value 
        2. can be used multiple times
        3. can be easily updated if need be
*/