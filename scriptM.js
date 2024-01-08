
//Variablen Dekloration

const countryColors = {
    'norwegen': '#800001',
    'schweden': '#F8EAC7',
    'finnland': '#7C727B',
    'russland': '#7F3301',
    'island':'#B2D3FF',
    'irland': '#B100FE',
    'vereinigtes königreich': '#FF1131',
    'frankreich': '#01FFFF',
    'spanien': '#FE6A00',
    'portugal':'#017F11',
    'deutschland': '#FFD800',
    'niederlande': '#B6FE04',
    'belgien':'#059F59',
    'schweiz':'#DF7D00',
    'italien': '#00E121',
    'österreich':'#000000',
    'tschechien': '#FFD890',
    'polen': '#FF669E',
    'greichenland': '#01147D',
    'slowenien': '#4E522D',
    'kroatien': '#0094FE',
    'bosnien herzegowina': '#FECAFB',
    'montenegro': '#5F3F54',
    'albanien': '#033905',
    'nordmazedonien': '#FC00CE',
    'kosovo':'#48FD4E',
    'bulgarien': '#ECFF6F',
    'rumänien': '#59FFB5',
    'serbien': '#745255',
    'ungarn': '#8E9008',
    'slowakei': '#0023FB',
    'litauen': '#F4A405',
    'estland': '#A48130',
    'belarus': '#45FF82',
    'lettland':'#049C23',
    'moldawien': '#A9ADAE',
    'ukraine': '#7F0037',
    'türkei': '#FFB59A',
    'dänemark': '#E383CD',
};

const button = document.getElementById('test');
const inputF = document.getElementById('land');
const shower = document.getElementById('shower');

let selectedColor;

var score = 0;

//Anzeigen des Scores
scoreShow = document.getElementById('scoretext');
scoreShow.textContent = score;

//Ausführen der Funktion Start bei Laden der Seite

window.onload = start;

//Die Startfunktion, die ein zufälligees erstes zu suchendes Land auswählt

function  start(){
    selectedColor = getRandomColor();
    shower.style.backgroundColor = selectedColor;
}

//Funktion, die Prüft, ob das ausgewählte Land zur gesuchten Farbe passt

function prufung(){
    
    
    
    const countryName = inputF.value.trim().toLowerCase();
    

    
    if(countryColors[countryName] === selectedColor){
        console.log('Richtig');
        score++;
    } else {
        console.log('Falsch');
        score--;
    }
    inputF.value = "";
    scoreShow = document.getElementById('scoretext');
    scoreShow.textContent = score;

    selectedColor = getRandomColor();
    
    console.log(`Ausgewählte Farbe für ${countryName}: ${selectedColor}`);
    shower.style.backgroundColor = selectedColor;
};

//Funktion die eine neue zufällige neue Farbe, aus den gegebenen auswählt

function getRandomColor() {
    const colorKeys = Object.keys(countryColors);
    const randomCountry = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    return countryColors[randomCountry];
}

//Knopf um auf die Menü Seite zu kommen

const menuPage = document.getElementById('menu');
    menuPage.addEventListener('click', () => {
    window.location.href = 'Index.html';
});