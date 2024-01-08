
//Variablen Dekloration

const flags = {
    'belgien':'Flagge/BEL.jpg',
    'dänemark':'Flagge/DÄ.jpg',
    'deutschland':'Flagge/DE.jpg',
    'frankreich':'Flagge/FR.jpg',
    'griechenland':'Flagge/GRI.jpg',
    'irland':'Flagge/IRL.jpg',
    'island':'Flagge/ISL.jpg',
    'italien':'Flagge/ITA.jpg',
    'kosovo':'Flagge/KOS.jpg',
    'kroatien':'Flagge/KROA.jpg',
    'österreich':'Flagge/ÖST.jpg',
    'russland':'Flagge/RUS.jpg',
    'spanien':'Flagge/SPA.jpg',
    'schweiz':'Flagge/SW.jpg',
    'schweden':'Flagge/SWE.jpg',
    'türkei':'Flagge/TÜR.jpg',
    'vereinigtes königreich':'Flagge/UK.jpg',
    'ukraine':'Flagge/UKR.jpg',
    'albanien':'Flagge/ALB.jpg',
    'estland':'Flagge/EST.jpg',
    'norwegen':'Flagge/NOR.jpg',
    'portugal':'Flagge/PO.jpg',
    'rumänien':'Flagge/RUM.jpg',
    'serbien':'Flagge/SER.jpg',
    'ungarn':'Flagge/UNG.jpg',
};

let randomFlagName = '';

var score = 0;
scoreShow = document.getElementById('scoretext');
scoreShow.textContent = score;

const inputF = document.getElementById('land');

//Funktion um zu testen, ob das richtige Land angegeben wurde

function testen(){

    const countryName = inputF.value.trim().toLowerCase();

    if(countryName === randomFlagName){
        console.log('Richtig');
        score++;
    } else {
        console.log('Falsch');
        score--;
    }

    inputF.value = "";
    scoreShow = document.getElementById('scoretext');
    scoreShow.textContent = score;

    loadRandomFlag();
}

//Funktion um eine neue Flagge auszuwählen und anzuzeigen

function loadRandomFlag() {
    const flagContainer = document.getElementById('flagContainer');
    const flagNames = Object.keys(flags);
    randomFlagName = flagNames[Math.floor(Math.random() * flagNames.length)];
    const randomFlagUrl = flags[randomFlagName];

    const flagImage = document.createElement('img');

    flagImage.src = randomFlagUrl;

    flagImage.style.width = '87.3%';
    flagImage.style.height = '87.3%';

    flagContainer.innerHTML = '';
    flagContainer.appendChild(flagImage);
}

//auswahl einer zufälligen Flagge zu beginn des Programms

window.onload = loadRandomFlag;

//Knopf um in das Menü zurückzukehren

const menuPage = document.getElementById('menu');
    menuPage.addEventListener('click', () => {
    window.location.href = 'Index.html';
});
