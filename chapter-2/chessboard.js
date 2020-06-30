// a little bit overengineered, but what the heck?
// I'm not going to do write JavaScript code
// the old fashioned, highly optimised C way!

const size = 10;
let middle = "";

for (let i = 0; i < size - 1; i++)
  if (i % 2)
    middle += "#";
  else
    middle += " ";

let even = middle + ((size - 1) % 2 ? "#" : " ") + '\n';
let odd = ((size - 1) % 2 ? "#" : " ") + middle + '\n';
let output =''

for (let i = 0; i < size; i++)
  if (i % 2)
    output+=odd;
  else
    output+=even;

console.log(output);