
//Variablen Dekloration

const hilfe1 = "Dies ist ein Spiel um ihre Geografie Künste zu prüfen! Sie können zwischen zwei Spielmodi wählen: Karten und Flaggen. Im Spielmodus Karten wird ihnen eine Farbe gezeigt und sie suchen dann nach dem Land mit dieser Farbe und schreiben dies in das Textfeld. Beim Spielmodus Flaggen wird ihnen eine Nationalflagge angezeigt und Sie sollen wieder den Namen des Landes in das Textfeld schreiben. In beiden Spielmodi erhalten sie einen Punkt für jede richtige und einen Abzug für jede falsche Antwort. Viel Spaß:)";
const hilfe2 = "This is a game to test your geography skills! You can choose between two game modes: Maps and Flags. In the Maps game mode, a color will be shown to you, and you'll then search for the country with that color and write it in the text field. In the Flags game mode, a national flag will be shown to you, and you should write the name of the country in the text field again. In both game modes, you will receive a point for each correct answer and a deduction for each incorrect answer. Have fun :)";

const ankund1 = "Zu suchende Länder:";
const ankund2 = "The countries to search for (All in German):";

let currentL = 1;

const inputF = document.getElementById('infotext');

//Start der Seite in Deutsch

infoShow = document.getElementById('infotext');
infoShow.textContent = hilfe1;
ankShow = document.getElementById('ankundigungen');
ankShow.textContent = ankund1;

//Funktion um die Sprache zwischen Englisch und Deutsch zu wechseln

function wechsel(){
    if(currentL == 1){
        infoShow.textContent = hilfe1;
        ankShow.textContent = ankund1;
        currentL = 2;
    }else{
        infoShow.textContent = hilfe2;
        ankShow.textContent = ankund2;
        currentL = 1;
    }
}

//Knopf um in das Menü zurückzukehren

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    window.location.href = 'Index.html';
});