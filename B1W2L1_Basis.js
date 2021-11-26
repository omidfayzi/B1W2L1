
// je voornaam + achternaam
// naam van de opleiding die je volgt

var element = document.getElementById('element')

var voornaam = prompt('Wat is jouw naam?')
var achternaam = prompt('Wat is jouw achternaam?')
var leeftijd = prompt('Wat is jouw leeftijd')



function ToonText() {
	element.innerHTML = `Welkom ${voornaam} ${achternaam} jouw leeftijd is ${leeftijd}`
} ToonText();
