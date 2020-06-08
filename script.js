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

console.log('next task')

let bookCount = 10;
for (let i = 0; i < bookCount; i++) {
    console.log(i)} 

console.log('next task')


for (let i = 0; i < 11; i++) {
    console.log(i)} 

console.log ('next task')

//Print the even numbers between 0 and 20.

for (let i = 0; i <= 20; i += 2) {
    console.log(i)} 

console.log ('next task')
//printNumbersTill(20);  should print 1, 1, 2, ...., 20

let printNumbersTill = numbers => {
    for (let i = 0; i <= 20; i++) {
        console.log(numbers) } 
}

printNumbersTill(20)


console.log ('next task')
//printNumbersTill(15); // should print 1, 1, 2, ...., 15

printNumbersTill(15)


let getGreetingTo = name =>  {
    console.log(`Hello, ${name}`);
}

console.log(getGreetingTo('Bea'))

console.log ('next task')



let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

printValues([0, 3, 6, 7, 9]);

console.log ('next task')

  let myNumbers = [10, 20, 30, 50, 12];
  // here we say, we want to do something with each item
myNumbers.forEach((number) => {
    // within the function I can tell what I want to do with the items
    console.log(number);
  });