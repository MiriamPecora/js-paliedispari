// Consegna:
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Definisco le variabili per l'input e per invertirlo
let input = prompt("Inserisci una parola");
let reversed = input.split('').reverse().join('');
// Verifico tramite console.log()
// console.log(reversed);

// Definisco la funzione
function isPalindrome(){
    // Se la parola inserita è == alla sua versione inversa allora è palindroma, altrimenti non lo è
    if(input == reversed){
        alert(`La parola che hai inserito è palindroma: ${reversed}`);
    } else {
        alert(`La parola che hai inserito non è palindroma: ${reversed}`);
    }
}

// Eseguo la funzione
isPalindrome();

