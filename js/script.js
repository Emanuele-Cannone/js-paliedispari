// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
var numeroPc = generaNumero(1,5);


console.log(numeroUtente);
console.log(numeroPc);


var somma = numeroUtente + numeroPc;
var risultato = confrontoPariDispari(somma);// il risultato è la funzione di somma, cioè 0 o 1
var stampa = 'il numero è dispari';// questo è il messaggio in caso di false
if(risultato){
  stampa = 'il numero è pari';// questo è il messaggio in caso di true
}

// console.log(confrontoPariDispari(somma));
console.log(somma);
console.log(stampa);

// funzioni
function generaNumero(min, max) { // min e max sono due segnaposti, a riga 9 dichiari quale deve essere il numero minimo ed il numero massimo
  return Math.floor(Math.random() * (max - min)) + min;
}
// con questa funzione generiamo il numero casuale

function confrontoPariDispari(numero){
  if(numero%2 == 0){
    return true;
  } 
  return false;
}
// con questa funzione verifichiamo se un numero è pari o dispari
// ritorniamo un valore booleano in modo che possiamo riutilizzare la funzione
// e non ci stampi sempre lo stesso messaggio 
// RICORDA A QUESTO PUNTO DI ASSSEGNARE UN TESTO AL MESSAGGIO DI VALORE 0 E 1