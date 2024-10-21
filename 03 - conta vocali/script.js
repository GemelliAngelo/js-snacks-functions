/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const vowels = ["a", "e", "i", "o", "u", "y"];

// Dichiara la funzione qui.

function howManyVowels(string) {
  let count = 0;
  let wichVowels = "(";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === vowels[i]) {
      count++;
      wichVowels += " " + vowels[i] + ")";
    }
  }
  return count + " " + wichVowels;
}

// Invoca la funzione qui e stampa il risultato in console

const vowelsCount = howManyVowels(word);
console.log(vowelsCount);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
