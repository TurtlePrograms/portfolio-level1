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
            <p>Hello, I'm David van Hoek, a ${Math.floor(ageInYears)} year-old student software developer living from Amersfoort, the Netherlands. I'm passionate about coding, and the satisfaction of seeing my code come to life is truly rewarding. I'm currently delving into the worlds of HTML, CSS, and JavaScript as part of my school curriculum while also working on my own projects using Python and Godot to bring my ideas to life.</p>
            <p>Outside of the digital realm, I find comfort and inspiration in nature, capturing its beauty through the lens of an old Nikon camera passed down from my parents. Photography, music, and reading are some of my cherished pastimes. Energetic music always gets my spirits up, and I enjoy exploring various genres that match the mood.</p>
            <p>Balancing school, coding, photography, and my other interests is all part of the daily routine. After a day at school, I immerse myself in my own coding projects, often spending my evenings playing games with friends.</p>`;
        break;
    case 'nl':
        var aboutMe = `
                <h2>David van Hoek</h2>
                <p>Hallo, ik ben David van Hoek, een ${Math.floor(ageInYears)} jaar oude student softwareontwikkelaar uit Amersfoort, Nederland. Ik ben gepassioneerd over programmeren en de voldoening van het zien tot leven komen van mijn code is echt belonend. Momenteel verdiep ik me in de werelden van HTML, CSS en JavaScript als onderdeel van mijn schoolcurriculum, terwijl ik ook werk aan mijn eigen projecten met behulp van Python en Godot om mijn ideeën tot leven te brengen.</p>
                <p>Buiten de digitale wereld vind ik comfort en inspiratie in de natuur, waarbij ik de schoonheid vastleg door de lens van een oude Nikon-camera die van mijn ouders is overgedragen. Fotografie, muziek en lezen zijn enkele van mijn gekoesterde vrijetijdsbestedingen. Energieke muziek geeft altijd mijn geest een oppepper, en ik geniet ervan om verschillende genres te verkennen die bij de stemming passen.</p>
                <p>Het in balans brengen van school, programmeren, fotografie en mijn andere interesses is allemaal onderdeel van mijn dagelijkse routine. Na een dag op school dompel ik mezelf onder in mijn eigen programmeerprojecten en breng ik vaak mijn avonden door met vrienden, waarbij we samen spelletjes spelen.</p>`;
        break;

    default:
        var aboutMe = `
        <h2>David van Hoek</h2>
        <p>Hello, I'm David van Hoek, a ${Math.floor(ageInYears)} year-old student software developer living from Amersfoort, the Netherlands. I'm passionate about coding, and the satisfaction of seeing my code come to life is truly rewarding. I'm currently delving into the worlds of HTML, CSS, and JavaScript as part of my school curriculum while also working on my own projects using Python and Godot to bring my ideas to life.</p>
        <p>Outside of the digital realm, I find comfort and inspiration in nature, capturing its beauty through the lens of an old Nikon camera passed down from my parents. Photography, music, and reading are some of my cherished pastimes. Energetic music always gets my spirits up, and I enjoy exploring various genres that match the mood.</p>
        <p>Balancing school, coding, photography, and my other interests is all part of the daily routine. After a day at school, I immerse myself in my own coding projects, often spending my evenings playing games with friends.</p>`;
        `
        break;
}

text.innerHTML = aboutMe;




