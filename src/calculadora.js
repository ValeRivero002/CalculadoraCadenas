function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  if (numbers.includes(',')) {
    const [num1, num2] = numbers.split(',').map(num => parseInt(num, 10));
    return num1 + num2;
  }
  return parseInt(numbers, 10);
}

export default add;
