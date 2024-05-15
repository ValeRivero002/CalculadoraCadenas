function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  if (numbers.includes(',')) {
    const nums = numbers.split(',').map(num => parseInt(num, 10));
    return nums.reduce((acc, curr) => acc + curr, 0);
  }
  return parseInt(numbers, 10);
}

export default add;
