var myAge = 27;  // Variable set as a human age number
var earlyYears = 2;  // Variable set as a dog age number

var earlyYears = earlyYears * 10.5;  // Calculates dog years to human years 

var laterYears = myAge - 2;   // Calculates human age subtracted with dog age
var laterYears = laterYears * 4; // Calculate the number of dog years accounted for by your later years

console.log(earlyYears);   // Prints on console early years
console.log(laterYears);   // Prints on console later years

var myAgeInDogYears = earlyYears + laterYears;   // Prints out dog age
var myName = "Oprah";   // Declaration of my name

console.log(myName.toLowerCase());   // Turns all letters to small letters
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
