function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, ch) {
  var count = 0;
  for (let i = 0; i < str.length; i++) if (str[i] == ch) count++;
  return count;
}


console.log(countBs("Baba JBBB"));
console.log(countChar("javascript", 'a'));
