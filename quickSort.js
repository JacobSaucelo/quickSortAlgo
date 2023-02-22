const number = [8, 20, -2, 4, -6, 3, 5, 1, 56, 14, 64, -2];

function quickSort(collection) {
  if (collection.length < 2) {
    return collection;
  }
  let dataSize = collection.length;
  let left = [];
  let right = [];
  let pivot = collection[collection.length - 1];
  let i;
  for (i = 0; i < dataSize - 1; i++) {
    if (collection[i] < pivot) {
      left.push(collection[i]);
    } else {
      right.push(collection[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let sorted = quickSort(number);

console.log(sorted);
