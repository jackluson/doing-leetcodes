/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let low = 0,
    high = letters.length - 1;
  if (letters[high] <= target) return letters[0];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (letters[mid] > target) {
      high = mid - 1;
      if (letters[high] <= target) {
        return letters[mid];
      }
    } else {
      low = mid + 1;
    }
  }
  return letters[0];
};
