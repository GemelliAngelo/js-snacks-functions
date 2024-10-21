/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.

function hello(string) {
  return "Ciao" + " " + string;
}

// Invoca la funzione qui e stampa il risultato in console

const greets = hello(name);
console.log(greets);

//Risultato atteso se si passa 'Mario': // ciao Mario
