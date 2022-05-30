// Capitalize
(() => {
    let text = "i am a web developer";
    let result = text.charAt(0).toUpperCase();
    console.log(result + text.slice(1));
})();

// Average Grade
const averageGrade = function(Math, Physics, English) {
    let sum = Math + Physics + English;
    let average = sum / 3;
    return (sumAve = [sum, average]);
    // return sumAve;
};
console.log("Sum: " + averageGrade(3, 4, 5)[0]);
console.log("Average: " + averageGrade(3, 4, 5)[1]);