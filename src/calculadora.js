function addChains(numbers) {
  if (numbers === '') {
    return 0;
  }
  let customDelimiter  = ',';
  const customDelimiterMatch = numbers.match(/^\/\/(\[([^\]]+)\])+/);

  if (customDelimiterMatch) {
    const delimiters = detectDelimiters(customDelimiterMatch);
    numbers = manipulateString(numbers, delimiters);
  }

  const nums = splitStringIntoNumbers(numbers);

  const filteredNums = ignoreNumbersGreaterThan1000(nums);

  return sumNumbers(filteredNums);
}

function detectDelimiters(customDelimiterMatch) {
  return customDelimiterMatch[0].match(/\[(.*?)\]/g).map(match => match.slice(1, -1));
}

function manipulateString(numbers, delimiters) {
  delimiters.forEach(customDelimiter => {
    const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    numbers = numbers.replace(new RegExp(escapedDelimiter, 'g'), ',');
  });
  return numbers;
}

function splitStringIntoNumbers(numbers) {
  return numbers.split(/[\n,;-]/).flatMap(part => part.split(',').map(num => parseInt(num, 10)));
}

function ignoreNumbersGreaterThan1000(nums) {
  return nums.filter(num => num <= 1000);
}

function sumNumbers(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

export default addChains;
