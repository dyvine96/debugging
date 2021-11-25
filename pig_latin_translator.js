var originalWords = process.argv.slice(1);
var pigLatinWords = [];

for (var i = 1; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  return word.slice(1, word.length) + word[0] + "ay";
}