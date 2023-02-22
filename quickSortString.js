const numbers = [
  { score: 57, title: "Ashly Holland" },
  { score: 26, title: "Eva James" },
  { score: 45, title: "Zaria Mcmahon" },
  { score: 25, title: "Imani Young" },
  { score: 98, title: "Raegan Farrell" },
  { score: 94, title: "Amelie Owen" },
  { score: 91, title: "Thaddeus Nichols" },
  { score: 36, title: "Maddox Moreno" },
  { score: 28, title: "Elsa Hess" },
  { score: 76, title: "Justice Valdez" },
];

function quickSort(collection) {
  if (collection.length < 2) return collection;

  let left = [];
  let right = [];
  let dataSize = collection.length;
  let pivot = collection[dataSize - 1];
  let i;

  for (i = 0; i < dataSize - 1; i++) {
    if (collection[i].title.toLowerCase() < pivot.title.toLowerCase()) {
      left.push(collection[i]);
    } else {
      right.push(collection[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sorted = quickSort(numbers);

console.log(sorted);
