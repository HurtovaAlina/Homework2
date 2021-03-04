//Task 1
function myTask1(){
console.log("Task 1");
let x = 1;
let y = 2;
let res1= ""+x+y; // Допишіть код, необхідно використовувати змінні x і y

console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = ""+Boolean(""+x)+y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(""+x)||Boolean(""+y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (""+x+"some text")*y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"
};

//Task 2
function myTask2(){
console.log("Task 2");
let a = prompt("Enter any number", "Your number");
let num = Number(a);

if (num >0 && num%2 == 0) {
    console.log("Entered number " + num + " is even and positive");
} else if (num%7 == 0 && num != 0) {
    console.log("Entered number " + num + " is multiple of 7");
} else console.log("Entered number " + num + " IS NOT even and positive and IS NOT multiple of 7");
};

//Task 3
function myTask3(){
console.log("Task 3");
let array=[];
array[0]=120;
array[1]="Hello JavaScript";
array[2]= true;
array[3]= null;
console.log("Created array:", array);
document.write("Array length is ", array.length + '<br>');
array[4]=prompt("Enter your value", "value");
document.write("Fifth element is: ", array[4]  + '<br>');
array.shift();
document.write("New array: ", array  + '<br>');
};

//Task 4
function myTask4(){
console.log("Task 4");
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join('*'));
};

//Task 5
function myTask5(){
console.log("Task 5");
let isAdult = prompt("Are you of legal age?", "Enter your age");
let age = Number(isAdult);
if (age >=18) {
    alert("You are of legal age!");
} else if (age<10 && age>0)  {
    alert("You are so young!");
} else {alert("Please, wait for your legal age!");}
};

//Task 6
function myTask6(){
console.log("Task 6");
let side1 = prompt("Enter side 1 of triangle", "side 1");
let side2 = prompt("Enter side 2 of triangle", "side 2");
let side3 = prompt("Enter side 3 of triangle", "side 3");
let a = Number(side1); // returns number type
let b = Number(side2);
let c = Number(side3);
// check wether these parameters can be sides of triangle
if ((a+b <= c) || (a+c <= b) || (b+c <= a)) {
    alert("Incorrect data");
} else {
    
    let p = (a+b+c)/2;
    let square = (p*(p-a)*(p-b)*(p-c))**(1/2); //find triangle square
    console.log("Square of triangle =  ", square.toFixed(3));

// find the longest side of the triangle 
    let gp = a; // assume that side a - is the longest and it is a hypotenuse
    let k1 = b;
    let k2 = c;
    if (b>a){ 
        gp = b;
        k1 = a;
        if (c>b){ 
            gp = c;
            k2 = b;
    };
    } else if (c>a){
                gp = c;
                k1 = b;
                k2 = a;};
/*console.log("gp=", gp);
console.log("k1=", k1);
console.log("k2=", k2);*/ 
// check wether the triangle is right

let katetSquare = parseInt(k1**2+k2**2);
let gipSquare = parseInt(gp**2);

if (katetSquare==gipSquare) {
    console.log("This triangle is RIGHT");
} else {
    console.log("This triangle is NOT RIGHT");
    };
};
};

//Task 7
function myTask7(){
console.log("Task 7");
console.log("Variant 1");
let  systemTime = new Date();
let  hour = systemTime.getHours();
console.log(systemTime);
console.log(hour);

if (hour >=23 || hour <5) {
    alert ("Good night!");
} else if (hour >=5 && hour<11){
    alert ("Good morning!");
} else if (hour >=11 && hour<17){
    alert ("Good afternoon!");
} else if (hour>=17 && hour<23){
    alert ("Good evening!");
};

console.log("Variant 2");
switch(hour) {
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
        alert ("Good night!");
        break;
    case 6:
    case 7:
    case 8:    
    case 9:
    case 10:
        alert ("Good  morning!");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:                    
        alert ("Good  afternoon!"); 
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:                     
        alert ("Good  evening!"); 
        break;    
    default:
        alert ("Something went wrong?"); 
  };
};