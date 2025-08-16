debugger
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber,rowCount) {
// const test="Testing";
return " ".repeat(rowCount-rowNumber)+ character.repeat( 2 * rowNumber - 1) + " ".repeat(rowCount-rowNumber)
//   return test;
}
// const call = padRow();
// console.log(call);


// for (let i = 0; i < count; i = i + 1) {
//   // rows.push(character.repeat(i + 1))
//   rows.push(padRow(i + 1, count));

// }

// let continueLoop = false;
// let done = 0;
// while (continueLoop) {
//   done++;

// }
// for(let i=count;i>0;false){

// }
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);