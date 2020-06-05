let name1='Noemi'
console.log(name1)

//Basic building blocks in JavaScript

let myVariable = true;
if (myVariable === true) {
    console.log('The condition has been evaluated to true');
}

let a = 7;
if (a < 5) {
    console.log(a/2);
} else {
    console.log(a*2);
}

a = 2;
if (a < 5) {
    console.log(a/2);
} else {
    console.log(a*2);
}

//Print the even numbers between 0 and 20.


let bookCount = 21;
for (let i = 0; i < bookCount; i++) {
    console.log(i)
} 

let getGreetingTo = name =>  {
    console.log(`Hello, ${name}`);
}

console.log(getGreetingTo('Bea'))

//Exercise 1
//Use your previous for loops and create a function which print the first N numbers.
/*let printNumbersTill= numbers => {
    for (let i = 0; i < bookCount; i++) {
        console.log(i)}
}

console.log(printNumbersTill(10))*/

let numbers = ['one', 'three', 'nine', 'eight', 'seven', 'six',]
let printValues = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        console.log= (numbers[i]); 
    }
}

