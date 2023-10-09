const text = document.querySelector('#age');

var currentDate = new Date();
var birthDate = new Date('2007-01-18'); // Replace with your birthdate
var ageInMilliseconds = currentDate - birthDate;
var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

console.log("Your approximate age is " + ageInYears.toFixed(2) + " years.");
var aboutme = "my name is David van Hoek, ik ben " + Math.floor(ageInYears) + " jaar oud. Ik volg nu de opleiding SoftwareDeveloper bij het ROC midden nederland. Behalve programeren en computers, vind ik ook lezen en muziek luistern erg leuk."  ;
text.innerHTML = aboutme;