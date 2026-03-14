let n = 4;
let size = n * 2 - 1;

for (let i = 0; i < size; i++) {
  let row = "";

  for (let j = 0; j < size; j++) {

    let top = i;
    let left = j;
    let right = size - 1 - j;
    let bottom = size - 1 - i;

    let value = Math.min(top, left, right, bottom);
    row += (n - value) + " ";
  }

  console.log(row);
}
