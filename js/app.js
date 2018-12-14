console.log('Day5/Weekend Homework')

/* I. Variables & Datatypes
A. Q & A
1.  let or const variableName = value
2.  varName = newvalue if used let to declear originally. If used const, we can't change 
3.  let newVar = existVar
4.  Declare is when you first introduce the variable. You need to declare it first before you can assign anythign to it
    Assign and Define just mean to give that variable some kind of value
5.  Pseudocoding is writing out the steps you need to take in plain english in order to solve the problem
6. about 75% planning, 25% writing code

B. Strings
*/
let firstVariable = 'Hello World';
firstVariable = 33;
let secondVariable = firstVariable;
secondVariable = 'Any string';
console.log(firstVariable); // will return 33;
console.log(secondVariable);

let yourName = 'Nick Humes';
console.log(`Hello, my name is ${yourName}`);

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(true != false);
console.log(false == false == false == false == false == false == true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a < b + c);
console.log(a != a + d);
console.log(48 == '48');

// D. The Farm

let animal = 'monkey';
if(animal == 'cow') {
    console.log('mooooo');
} else {
        console.log('Hey! You\'re not a cow.')
    }

// E. Driver's Ed

let age = 7;
if (age >= 16) {
    console.log('Here are the keys')
}
else {
    console.log('Sorry, you\'re too young');
}

// II. Loops
// A. The Basics

for(let i = 0; i < 11; i++) {
    console.log(i);
}
for(let i = 10; i < 401; i++){
    console.log(i);
}
for(let i = 12; i < 401; i = i+3) {
    console.log(i);
}
// B. Get even
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//C. Give me Five
for(let i = 0; i < 100; i++) {
    if(i % 5 == 0){
        console.log(`I found a ${i}. High Five!`);
    }
    else if (i % 3 == 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

// D. Savings Account
let sum = 0;
for (let i = 0; i < 11; i++){
    sum += i;
}
console.log(sum);