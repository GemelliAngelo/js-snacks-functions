/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let sameInitials = [];
const namesInitialChar = "L";

// Dichiara la funzione qui.

function getSameInitials(array, sameInitialsArray, initialChar) {
  for (let i = 0; i < array.length; i++) {
    const string = array[i];
    if (string.charAt(0) === initialChar) {
      sameInitialsArray.push(string);
    }
  }
  return sameInitialsArray;
}

// Invoca la funzione qui e stampa il risultato in console

sameInitials = getSameInitials(names, sameInitials, namesInitialChar);
console.log(sameInitials);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
