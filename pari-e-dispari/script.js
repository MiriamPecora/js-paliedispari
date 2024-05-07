// Consegna:
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Definisco due variabili per l'input dell'utente
let input1 = prompt("Digita in base alla tua scelta: pari o dispari");
let input2 = parseInt(prompt("Digita un numero da 1 a 5"));

// Per evitare ripetizioni, definisco due variabili per pari e dispari
const even = "pari";
const odd = "dispari";

// Tramite due cicli while, verifico che l'input dell'utente rientri tra le istruzioni date, nel caso contrario 
// lo si avverte tramite alert e gli si dà la possibilità di inserire nuovamente i valori
while (input1 !== even && input1 !== odd) {
    alert('Inserisci solo "pari" o "dispari" per giocare');
    input1 = prompt("Digita in base alla tua scelta: pari o dispari");
}
while (isNaN(input2) || input2 < 1 || input2 > 5) {
    alert("Input non valido, inserisci un numero tra 1 e 5");
    input2 = parseInt(prompt("Digita un numero da 1 a 5"));
}

// Definisco una funzione per generare un numero random compreso tra 1 e 5
function randomizedNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
let computerNumber = randomizedNumber();
// console.log("Numero del computer:", computerNumber);

// Definisco una variabile per la somma dell'input dell'utente e il numero generato per il computer
let sum = input2 + computerNumber;
// console.log("Somma dei numeri:", sum);

// Definisco una funzione per determinare il vincitore tra utente e computer
function determineWinner() {
    
    const isSumEven = sum % 2 === 0;
    const isInputEven = input1 === "pari";

    // Stampo un messaggio di vittoria o sconfitta in base al risultato della somma e l'input dell'utente quando ha deciso tra pari e dispari
    if ((isSumEven && isInputEven) || (!isSumEven && !isInputEven)) {
        alert(`Hai vinto! Il numero è ${sum} ed è ${input1}`);
    } else {
        alert(`Hai perso! Il numero è ${sum} ed è ${input1}`);
    }
}

// Eseguo la funzione
determineWinner();




