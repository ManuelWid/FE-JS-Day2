let number = 558;

let hundred = Math.floor(number / 100);

let fifty = Math.floor((number % 100) / 50);
// let fifty = Math.floor((number * 0.1) / 50);

let twenty = Math.floor(((number % 100) % 50) / 20);
// let twenty = Math.floor((number * 0.1 * 0.5) / 20);

let ten = Math.floor((((number % 100) % 50) % 20) / 10);
// let ten = Math.floor((number * 0.1 * 0.5 * 0.2) / 10);

let rest = Math.floor((((number % 100) % 50) % 20) % 10);

let result = [hundred, fifty, twenty, ten];

console.log(result);
console.log(`You can get at least 10 Euro. The amount ${rest} cannot be paid`);

function printInConsole() {
    // test
    console.log("Hi");
}

setTimeout(function() {
    printInConsole();
}, 5000);

function timer() {
    let date = new Date();
    console.log(date);
}

timer();

setInterval(function() {
    timer();
    printInConsole();
}, 1000);