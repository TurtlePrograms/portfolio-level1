const text = document.querySelector('#age');

var currentDate = new Date();
var birthDate = new Date('2007-01-18'); // Replace with your birthdate
var ageInMilliseconds = currentDate - birthDate;
var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

console.log("Your approximate age is " + ageInYears.toFixed(2) + " years.");
text.innerHTML = aboutme;


const lang = document.getElementById('language-select').value;
console.log(lang)
switch (lang) {
    case 'en':
        var aboutme = "my name is David van Hoek, I am " + Math.floor(ageInYears) + " years old. I am currently studying Software Development at ROC Midden Nederland. Besides programming and computers, I also enjoy reading and listening to music.";
        break
    case 'nl':
        var aboutme = "mijn naam is David van Hoek, Ik ben "+ Math.floor(ageInYears) + "jaar oud. ik ben volg op dit moment de opleiding tot Software Developer by het ROC midden nederland. naast programeren en computers, vind ik het ook erg leuk om te lezen en om naar muziek te luisteren"
        break
    default:
        var aboutme = ""
        break
    }
text.innerHTML = aboutme;



