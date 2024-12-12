function mergeSort (array) {
  // base case
  const len = array.length
  if (len === 1) return array

  // split
  const halfwayPoint = Math.floor(len / 2)
  const firstHalf = mergeSort(array.slice(0, halfwayPoint))
  const secondHalf = mergeSort(array.slice(halfwayPoint))

  // merge
  const sortedArray = []
  for (let i = 0; i < len; i++) {
    const firstNumber = firstHalf[0]
    const secondNumber = secondHalf[0]

    // If any of these are undefined, it means that the half is empty
    // Therefore, the other half should be appended to the sorted array.
    // No need to do any more comparisons, yay!
    if (firstNumber === undefined) return sortedArray.concat(secondHalf)
    if (secondNumber === undefined) return sortedArray.concat(firstHalf)

    const lowestNumber = firstNumber < secondNumber ? firstHalf.shift() : secondHalf.shift()
    sortedArray.push(lowestNumber)
  }

  return sortedArray
}
