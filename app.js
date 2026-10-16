/* Function: it is reusable block of code that perform specific task. */
// Function declaration
function greet() {
    console.log("Hello, Kashif");

}
greet()

function add(a, b) {
    console.log("add = " + a + b);
}
add(1, 3)
// Function Expression
const Welcome = function () {
    console.log("Welcome to my website");
}
Welcome()

const sum = function (a, b) {
    console.log("Sum = " + a + b);
}
sum(2, 4)

function calculateArea() {
    let length = 12;
    let width = 6;
    let area = length * width;
    console.log("Area = " + area);
}
calculateArea()

function area(length, width) {
    let area = length * width;
    console.log(`Area = ${area}`);

}
area(3, 4)

function returnArea(length, width) {
    return length * width;
}
console.log("Area = " + returnArea(2, 5));

const calArea = function (length, width) {
    console.log("Area = " + length * width);
}
calArea(3, 5);


let findArea = (length, width) => {
    return length * width;
}
console.log(`Area = ${findArea(10, 5)}`);



function calculateSum(a, b) {
    console.log(`Sum = ${a + b}`);
}
calculateSum(3, 4)

function findSum(a, b) {
    return a + b;
}
let result = findSum(2, 4)
console.log(`Sum = ${result}`);


let calculate = function MulNum(a, b) {
    return a * b;
}
let mul = calculate(3, 5)
console.log("Multiply = " + mul);

// Arrow Function
let addNum = (a, b) => {
    return a + b;
}
console.log(" a + b = " + addNum(2, 3));

let square = (number) => {
    return number * number;
}
console.log(`Square = ${square(3)}`);

// Implicit Function
let calculateSquare = number => number * number;
console.log("square = " + calculateSquare(8));

const hello = () => console.log("Hello");
hello()

const calculateAverage = function (mark1, mark2, mark3) {
    let total = mark1 + mark2 + mark3;
    let average = total / 3
    return average;
}
console.log("Average! " + calculateAverage(82, 44, 72));

function checkResult(mark1, mark2, mark3) {
    console.log(mark1 + mark2 + mark3);
}

checkResult(89, 52, 72)
//  Parameters and Arguments: 
function user(name, age) {
    console.log("My name is " + name);
    console.log("My age is " + age);
}
user("Kashif", 21)

const userInfo = (name, age) => {
    console.log(`My name is ${name} And i am ${age} Year Old`);
}
userInfo("Kashif", 21)
// Default Parameter
function num(no = 21) {
    return no
}
console.log(num(20));

let userName = (user = "Guess!") => {
    return "Welcome " + user;
}
console.log(userName());
console.log(userName("Kashif"));

// Rest Parameter
function num(...number) {
    return number
}
console.log(num(12, 32, 34, 45, 66));

const no = (...numbers) => {
    return numbers.reduce((total, number) => total + number)
}
console.log(no(12, 23, 34, 45, 56));

/* Task of Function  */
/* Level 1 — Function Fundamentals */
/* Task No 1: Create a function called welcomeUser that accepts a user's name and returns: */
// First Method
function welcomeUser(name) {
    return "Welcome " + name
}
console.log(welcomeUser("Kashif"));
// Second Method
function welcomeName(name) {
    console.log(`Welcome ${name}`);

}
welcomeName("Ahmad")
/* Task No 2:Create a function  addNumbers that accepts two numbers and returns their sum. */
function addNumbers(a, b) {
    return a + b;
}
let addNumber = addNumbers(7, 3)
console.log("a + b = " + addNumber);

/* Task No 3: Calculate Product Total */
function calculateProducts(price, quantity) {
    return price * quantity;
}
let productTotal = calculateProducts(500, 3)
console.log(productTotal);
/* Task No 4: Default Username */
function welcomeGuest(name = "Guest") {
    return name;
}
console.log("Welcome " + welcomeGuest());
console.log("Welcome " + welcomeGuest("Kashif"));

/*  Level 2 — Functions + Conditions*/

/* Task Mo 5: Check Adult if age is greater then 18 */
function checkAge(age) {
    if (age >= 18) {
        console.log("You are an Adult!");
    } else {
        console.log("You are Minor!");

    }
}
checkAge(20)
checkAge(15)

/* Task No 6:  Check Student is Pass or Fail ?*/
function checkMarks(marks) {
    return marks >= 50 ? "Pass" : "Fail";
}
console.log(checkMarks(60));
console.log(checkMarks(40));
/* Task No 7:  Check a Number Is  Even or Odd ? */
function checkNum(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(checkNum(4));
console.log(checkNum(7));
/* Task No 8: Imagine a website login system. */
function checkLogin(isLoggedIn) {
    return isLoggedIn === true ? "Welcome Back!" : "Please First Login!"
}
console.log(checkLogin(true));
console.log(checkLogin(false));

/* Level 3 — complicated */
/*  Task No 9: An online store gives discounts based on the purchase amount.*/
function calculateDiscount(price) {

    if (price >= 10000) {
        let discount = price * 20 / 100;
        let finalPrice = price - discount;
        console.log(`20% discount = ${finalPrice}`);

    } else if (price >= 5000) {
        let discount = price * 10 / 100;
        let finalPrice = price - discount;
        console.log(`10$ Discount = ${finalPrice}`);
    } else {
        console.log("No discount!", price);

    }
}
calculateDiscount(600)
/* Task No 10:  Grade Calculator */
function calculateGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return "Grade A";
    } else if (marks >= 80 && marks < 90) {
        return "Grade B";
    } else if (marks >= 70 && marks < 80) {
        return "Grade C";
    } else if (marks >= 60 && marks < 70) {
        return "Grade D"
    } else if (marks < 60 && marks >= 0) {
        return "Fail"
    } else {
        return "Invalid Marks"
    }
}
console.log(calculateGrade(95));
console.log(calculateGrade(85));
console.log(calculateGrade(74));
console.log(calculateGrade(63));
console.log(calculateGrade(20));
console.log(calculateGrade(101));

/* Task No 11: Temperature Checker */
function checkTemperature(temperature) {
    if (temperature >= 35) {
        return "It's Hot!"
    } else if (temperature >= 25 && temperature < 35) {
        return "It's Normal!"
    } else {
        return "It's Clod!"
    }
}
console.log(checkTemperature(40));
console.log(checkTemperature(30));
console.log(checkTemperature(20));

/* Level 4 — Real-World Problems */
/* Task No 12:  E-Commerce Stock Checker */
function checkStock(productName, quantity) {
    if (quantity > 0) {
        return `${productName} is Available!`
    } else {
        `${productName} is out of Stock!`
    }
}
console.log(checkStock("Laptop", 1));

/* Task No 13: An e-commerce company calculates shipping based on order amount. */

function calculateShipping(orderAmount) {
    if (orderAmount >= 5000) {
        return 0;
    } else {
        return 250;
    }
}
console.log(calculateShipping(7000));
console.log(calculateShipping(3000));

/* Task No 14: Build a small Student Result System using functions. */
function findAverage(mark1, mark2, mark3) {
    let total = mark1 + mark2 + mark3;
    let average = total / 3;
    return average;
}
function chekResult(average) {
    return ` ${average > 50 ? "Pass" : "Fail"}`
}
function generateResult(name, average) {
    let result = chekResult(average)
    return `Name: ${name} Average: ${average} Result: ${result}`

}
let calAverage = findAverage(82, 51, 84)
let cheResult = chekResult(calAverage)
console.log(generateResult("Kashif", calAverage));

/* Final Task 15: Create a small shopping bill system. */

function calculateSubtotal(price, quantity) {
    let subtotal = price * quantity;
    return subtotal;
}
function calculateDiscount(subtotal, discountPercent) {
    let calculateDiscount = subtotal * discountPercent / 100;
    return calculateDiscount;
}
function generateBill(price, quantity, discountPercent) {
    let subtotal = calculateSubtotal(price, quantity)
    let discount = calculateDiscount(subtotal, discountPercent)
    let finalAmount = subtotal - discount;
    return `Subtotal: ${subtotal}
Discount: ${discount}
FinalAmount: ${finalAmount}`;

}
let finalBill = generateBill(1000, 3, 10)
console.log(finalBill);












