//Knopf um auf die...

//...Karten Seite zu kommen
const mapQuiz = document.getElementById('maps');
mapQuiz.addEventListener('click', () => {
    window.location.href = 'maps.html';
});

//...Flaggen Seite zu kommen
const flagQuiz = document.getElementById('flags');
flagQuiz.addEventListener('click', () => {
    window.location.href = 'flags.html';
});

//...Hilfs Seite zu kommen
const helpPage = document.getElementById('help');
helpPage.addEventListener('click', () => {
    window.location.href = 'help.html';
});