const text = document.querySelector('#age');

var currentDate = new Date();
var birthDate = new Date('2007-01-18'); // Replace with your birthdate
var ageInMilliseconds = currentDate - birthDate;
var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

console.log("Your approximate age is " + ageInYears.toFixed(2) + " years.");
var aboutme = "Mijn name is David van Hoek, ik volg de opleiding Software Development bij ROC Midden Nederland. Mijn Cohort Jaar is 2023." + " Ik ben " + Math.floor(ageInYears) + " jaar oud."  ;
text.innerHTML = aboutme;