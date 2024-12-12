function mergeSort(array) {

  // base case
  const len = array.length;
  if (len < 2) return array;

  // split
  const halfwayPoint = Math.floor(len / 2);
  const firstHalf = mergeSort(array.slice(0, halfwayPoint));
  const secondHalf = mergeSort(array.slice(halfwayPoint));

  // merge
  let sortedArray = [];
  for (let i = 0; i < len; i++) {
    const firstNumber = firstHalf[0];
    const secondNumber = secondHalf[0]
    if (firstNumber === undefined) {
      sortedArray.push(secondHalf.shift())
      continue;
    }
    if (secondNumber === undefined) {
      sortedArray.push(firstHalf.shift())
      continue;
    }

    const lowestNumber = firstNumber < secondNumber ? firstHalf.shift() : secondHalf.shift();
    sortedArray.push(lowestNumber);
  }

  return sortedArray;
}

console.log(mergeSort([2, 1, 8 , 29, 13, 248]));