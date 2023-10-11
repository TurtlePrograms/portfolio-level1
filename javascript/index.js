const text = document.querySelector('#age');

var currentDate = new Date();
var birthDate = new Date('2007-01-18'); // Replace with your birthdate
var ageInMilliseconds = currentDate - birthDate;
var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

console.log("Your approximate age is " + ageInYears.toFixed(2) + " years.");
var aboutme = "my name is David van Hoek, I am " + Math.floor(ageInYears) + " years old. I am currently studying Software Development at ROC Midden Nederland. Besides programming and computers, I also enjoy reading and listening to music.";
text.innerHTML = aboutme;