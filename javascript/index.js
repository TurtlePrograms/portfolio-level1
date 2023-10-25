const text = document.querySelector('#age');

var currentDate = new Date();
var birthDate = new Date('2007-01-18');
var ageInMilliseconds = currentDate - birthDate;
var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);



const lang = document.getElementById('language-select').value;
console.log(lang, "index.js");

switch (lang) {
    case 'en':
        var aboutMe = `
        <h2>David van Hoek</h2>
        <p>Hello, I'm David van Hoek, an aspiring software developer with a passion for nature and photography. I am currently ${Math.floor(ageInYears)} years old. I began my journey in Software Development at ROC Middle Netherlands in 2023, where I'm diving into HTML, CSS, and JavaScript. I also work on my own projects using Python and the Godot game engine.</p>
        <p>Aside from my love for code, I hold a deep admiration for nature and enjoy capturing its beauty through my camera lens. If you take a look at my photos, you'll notice that I often focus on nature. If you're interested in my photos, feel free to scroll further; you'll find them there. In my free time, you'll often find me in nature, listening to inspiring music, and immersed in a good book.</p>
        `;
        
        break;
    case 'nl':
        var aboutMe = `
        <h2>David van Hoek</h2>
        <p>Hallo, ik ben David van Hoek, een enthousiaste softwareontwikkelaar in de maak met een passie voor de natuur en fotografie. Ik ben nu ${Math.floor(ageInYears)} jaar oud. En ik ben in 2023 begonnen met de opleiding Software Development bij het ROC midden Nederland. Ik ben hier bezig met onder andere HTML, CSS en Javascript. Zelf werk ik aan mijn eigen projectjes met Python en de Godot game engine.</p>
        <p>Naast mijn liefde voor code, koester ik een diepe bewondering voor de natuur en leg ik graag de schoonheid ervan vast met mijn camera. Als je naar mijn Foto’s kijkt zal je zien dat het vaak de natuur is die ik vastleg, als je geïnteresseerd bent in mijn foto’s scrol dan verder daar zijn ze te vinden. Tijdens mijn vrije uren vind je me vaak in de natuur, luisterend naar inspirerende muziek en verdiept in een goed boek.</p>
        `;
        break;

    default:
        var aboutMe = `
        <h2>David van Hoek</h2>
        <p>Hello, I'm David van Hoek, an aspiring software developer with a passion for nature and photography. I am currently ${Math.floor(ageInYears)} years old. I began my journey in Software Development at ROC Middle Netherlands in 2023, where I'm diving into HTML, CSS, and JavaScript. I also work on my own projects using Python and the Godot game engine.</p>
        <p>Aside from my love for code, I hold a deep admiration for nature and enjoy capturing its beauty through my camera lens. If you take a look at my photos, you'll notice that I often focus on nature. If you're interested in my photos, feel free to scroll further; you'll find them there. In my free time, you'll often find me in nature, listening to inspiring music, and immersed in a good book.</p>
        `;
        break;
}

text.innerHTML = aboutMe;




