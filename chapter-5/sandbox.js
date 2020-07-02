// function repeat(n, action) {
//   for (let i = 0; i < n; i++) action(i);
// }

// function unless(test, then){
//   if (!test) then();
// }

// // repeat(3, n=> {
// //   unless(n%2 ==1, ()=>{
// //     console.log(n, "is even");
// //   })
// // })

// // ['A', 'B'].forEach(l => console.log(l));

// var a={
//   name: "Coptic",
//   ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//   direction: 'ltr',
//   year: -200,
//   living: false
// }



function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    // console.log(known);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1,2,3,4,5], n=> n>2));

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, {count}) => n+count, 0);
  if(total ==0) return "No scripts found";

  return scripts.map(({name, count})=>{
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(', ');
}

console.log(textScripts('javascript замацаванне 文档对象模型'))
