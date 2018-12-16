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
for(let i = 0; i < 101; i++){
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

//E. Multiples of 3 and 5
// I read all the instructions and I know I did this already, just thought I needed more practice :)

let eulerSum = 0;
for(i = 0; i < 101; i++){
    if(i % 3 == 0){
        eulerSum+= i;
    }
    else if(i % 5 ==0){
        eulerSum += i;
    }
}
console.log(eulerSum);

// III. Arrays and Control Flow
// A. Talk about it
//1. Values
//2. Unless they are manipulated
//3. You could model any item that contains different items inside it, like a wallet. Your wallet would be the array variable, with your ID and different cards, cash etc. being the values

const quotes = ['Anything worth doing is worth doing badly', 'Watch out the worlds behind you', 'My candle burns at both ends, it will not last the night. But ah, my foes, and oh, my friends - it gives such a lovely light']

//C. Accessing Elements
const randomThingss = [1, 10, 'Hello', true];
randomThingss[0];
randomThingss[2] = 'World';
console.log(randomThingss);
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2];
ourClass[4] = 'Octocat';
ourClass.push('Cloud City');
const myArray = [5, 10, 500, 20];
myArray.push('Egon');
myArray.push('the strokes');
myArray.shift();
myArray.unshift('Bob Marley');
myArray.pop();
myArray.reverse();
console.log(myArray);
let myInt = 7;
if(myInt > 10){
    console.log('big number');
} else if (myInt < 5) {
    console.log('small number');
} else {
    console.log('monkey')
}



const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
kristynsCloset.splice(6, 0, 'raybans');
console.log(kristynsCloset);
kristynsCloset[5] = 'stained knit hat'
console.log(kristynsCloset);
console.log(`Thom is looking fierce in his ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}`);


// IV. Functions
function printGreeting(name) {
    console.log(`Hey there ${name}`);
}
printGreeting('slimer');
// Did it twice...

function printCool(name) {
    console.log(`${name} is cool`);
}
printCool('Nick');

function calculateCool(num) {
    return num * num * num;
}
console.log(calculateCool(5));
