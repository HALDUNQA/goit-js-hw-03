function filterArray(numbers, value) {
  const newNUmber = [];
  //for( let i=0 ; i< number.length; i++ ) {
  for (const i of numbers) {
    if (i > value) {
      newNUmber.push(i);
    }
  }

  return newNUmber;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
