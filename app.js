function analyzeArray(arr) {
  if (arr.length === 0) return { max: null, min: null, duplicates: [] };

  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let duplicates = [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];

  return { max: maxNum, min: minNum, duplicates: duplicates };
}

// Example usage:
const arr = [2, 4, 1, 7, 2, 8, 4];
const result = analyzeArray(arr);

console.log(`Max number: ${result.max}`);
console.log(`Min number: ${result.min}`);
console.log(`Duplicate numbers: ${result.duplicates}`);
