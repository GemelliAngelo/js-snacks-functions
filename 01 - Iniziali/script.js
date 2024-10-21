/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let namesInitials = [""];

// Dichiara la funzione qui.

function getinitials(array, arrayInitials) {
  let initial;
  for (let i = 0; i < array.length; i++) {
    initial = array[i].charAt();
    arrayInitials.push(initial);
  }
}

// Invoca la funzione qui e stampa il risultato in console

namesInitials = getinitials(names, namesInitials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(namesInitials);
