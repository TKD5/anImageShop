// DOM Document Object Model
// Interacting with HTML Elements

/* const greetingMessage = "Hello World! I'm learning JavaScript!";

document.getElementById('greeting').innerHTML = greetingMessage; */


// get multiple elements with the same class name.
// can't use .innerHTML with .getElementByClassName
/* console.log(document.getElementsByClassName('product-item')); */

//get elements by tag name 
/* console.log(document.getElementsByTagName('p'));
 */
//Most often used
/* document.querySelector('p#weather').innerHTML = 'weather'; */


//CSS Manipulation
 /* document.querySelector('p#weather').style.color = 'lightgray';
 document.querySelector('p#weather').style.fontSize = '20px'; */

 //CSS adding & removing classes with .classList

/*  document.querySelector('p#weather').classList.add('redbg')
 document.querySelector('p#weather').classList.remove('redbg');
 document.querySelector('p#weather').classList.toggle('redbg'); */

 //Events

/*  document.querySelector('p#weather').addEventListener('click', function(){
    alert('p element clicked')
 }); */


 //Variables (var, let, const)
const customer = 'Karl';
console.log(customer);
console.log('Hello, ' + customer + '.');

const balance = 450000;
console.log('Hello, ' + customer + '. ' + 'Your balance is ' + balance + 'JPN Yen.');

//Data Types 
// typeof variable name

//strings 
let accountNumber = 'JP123456';
console.log(accountNumber.length);
console.log(accountNumber[0]);
//extract parts of a string
console.log(accountNumber.slice(0,2));
//replace parts of a string
console.log(accountNumber.replace("JP", "UK"));
//remove parts of a string 
console.log(accountNumber.replace("JP", ""));

//Numbers 
let price = 55.86;
console.log(typeof price);
//round numbers up with Math.round()
console.log(Math.round(price));
//round numbers down with Math.floor()
console.log(Math.floor(price));
//round numbers to a specific decimel place with .toFixed()
console.log(price.toFixed(3));
//convert data types
num1 = 4;
num2 = '4';
//convert to a number with parseFloat()
console.log(parseFloat(num2));
console.log(num1 + parseFloat(num2));

//convert to string with .toString()
console.log(num1.toString());

//Arrays = a list of values

let array1 = [1,2,3,4];
console.log(array1);

console.log(array1.length);

//get the last element of an array
console.log(array1[array1.length - 1]);

//add elements to the end of an array
console.log(array1.push(5));
console.log(array1);

//add elements to the beginning of an array
console.log(array1.unshift(0));
console.log(array1);

//merge arrays together with .concat()
array2 = [6,7,8,9,10];
console.log(array1.concat(array2));

//Objects 

let student = 'karl';
console.log(student);

let studentInfo = {
    "name": 'karl',
    "DOB": '1990',
    "nationality": 'British'
};
console.log(studentInfo.DOB);

//add a new property to the object
studentInfo.id = "0505TKD";
console.log(studentInfo);

//change an existing property
studentInfo.name = 'Karl Davis';
console.log(studentInfo);

//Objects in arrays
let student1 = {
    "name": 'Yuki',
    "age": 34,
    "nationality": 'Japanese'
};
let student2 = {
    "name": 'Karl',
    "age": 33,
    "nationality": 'British'
};
let student3 = {
    "name": 'Lee',
    "age": 33,
    "nationality": 'British'
};

let students = [student1, student2];
console.log(students);
console.log(students.push(student3));
console.log(students);

//Booleans - true / false
/*
    > greater than 
    < less  than
    === strictly equal to
    >= greater than or equal to
    <= less than or equal to 
    !== not strictly equal to 
*/

//Functions 

//loops
//For Loop has 3 arguements (make a variable; a condition; increase value of variable )


let pets = ['cat', 'dog', 'mouse', 'rabbit'];
/* for (let a = 0; a < pets.length; a++) {
    console.log(pets[a]);
} */

//for in method
for (let a in pets) {
    console.log(a);
}


//forEach loop

//Array Filter 

let numbers = [1,2,3,4,5,6,7,8];
let greaterThan4 = numbers.filter(function(item) {
    return item > 4;
});

console.log(greaterThan4);