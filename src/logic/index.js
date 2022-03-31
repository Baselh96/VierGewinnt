export const logic = (array, position) => {
  return (
    vertical(array, position) ||
    diagonal(array, position, 1) ||
    diagonal(array, position, 8) ||
    diagonal(array, position, 6)
  );
};

const vertical = (array, position) => {
  return (
    array[position] === array[position + 7] &&
    array[position] === array[position + 14] &&
    array[position] === array[position + 21]
  );
};

const diagonal = (array, position, anzahl) => {
  var newPosition = position + anzahl;
  var newPosition2 = position - anzahl;
  var counter = 1;

  while (newPosition <= 48) {
    if (array[position] !== array[newPosition]) {
      break;
    }
    newPosition += anzahl;
    counter += 1;
  }

  while (newPosition2 >= 0) {
    if (array[position] !== array[newPosition2]) {
      break;
    }
    newPosition2 -= anzahl;
    counter += 1;
  }

  return counter >= 4;
};
