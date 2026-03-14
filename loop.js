let number = 4;                   
let totalSize = number * 2 - 1;   

console.log("Matrix Size:", totalSize);

for (let rowIndex = 0; rowIndex < totalSize; rowIndex++) {

  let rowData = "";
  console.log("Row:", rowIndex);

  for (let colIndex = 0; colIndex < totalSize; colIndex++) {

    let topDistance = rowIndex;
    let leftDistance = colIndex;
    let rightDistance = totalSize - 1 - colIndex;
    let bottomDistance = totalSize - 1 - rowIndex;

    console.log("top:", topDistance,
                "left:", leftDistance,
                "right:", rightDistance,
                "bottom:", bottomDistance);

    let minDistance = Math.min(
      topDistance,
      leftDistance,
      rightDistance,
      bottomDistance
    );

    console.log("Minimum Distance:", minDistance);

    let finalNumber = number - minDistance;

    console.log("Print Number:", finalNumber);

    rowData += finalNumber + " ";
  }

  console.log("Row Output:", rowData);
}
