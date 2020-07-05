// car and cat
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

// pop and prop
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

//ferret, ferry, and ferrari
verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

//Any word ending in ious
verify(
  /[a-zAz]*ious(\s|$)/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);

//A word longer than six letters
verify(/\b[a-zA-Z]{7,}\b/, ["hottentottententen"], ["no", "hotten totten tenten"]);

// A word without the letter e (or E)
verify(
  /(^|\s)[a-df-z]*($|\s)/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}
