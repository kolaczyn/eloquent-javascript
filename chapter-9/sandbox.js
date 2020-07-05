console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"))

// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline

function getDate(string){
  let[_, month, day, year]=
  /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month-1, day);
}

console.log(getDate("1-30-2003"));