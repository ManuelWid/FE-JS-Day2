// ex 1 | Crystal Gazer
const crystalGazer = function(
    number_childrens,
    partners_name,
    geographicLocation,
    job_title
) {
    const identity = `You will be a ${job_title} in ${geographicLocation} and married to ${partners_name} with ${number_childrens} children.`;
    // console.log(
    // `You will be a ${job_title} in ${geographicLocation} and married to ${partners_name} with ${number_childrens} children.`;
    return identity;
};
// crystalGazer(3, "John", "Austria", "web developer");
console.log(crystalGazer(3, "John", "Austria", "web developer"));

// ex 2 | Age Calculator
const ageCalculator = function(birthYear, currentYear) {
    const age = `You are either ${currentYear - birthYear} or ${
    currentYear - birthYear - 1
  }`;
    return age;
};
console.log(ageCalculator(2002, 2022));

// ex 3 | Age Calculator-improved
const ageCalculator1 = function(birthYear) {
    const date = new Date();
    let year = date.getFullYear();
    const age = `You are either ${year - birthYear} or ${year - birthYear - 1}`;
    return age;
};
console.log(ageCalculator1(2000));

// ex 4 | Degree-Radian Conversion
const degreeRadian = function(degrees) {
    const pi = Math.PI;
    return degrees * (pi / 180);
};
console.log(degreeRadian(90));

// ex 5 | Area and Volume of a box
const areaVolume = function(width, height, depth = 0) {
    const area = width * height;
    const volume = width * height * depth;
    const arvo = [area, volume];
    return arvo;
};
console.log("The area of the box is: " + areaVolume(10, 20)[0]);
console.log("The volume of the box is: " + areaVolume(10, 20, 5)[1]);

// ex 5 | Area and Volume of a box