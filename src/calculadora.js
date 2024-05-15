function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  const separators = [',', '-']; // Lista de separadores permitidos

  // Utilizamos una expresión regular para dividir la cadena en números
  const nums = numbers.split(new RegExp('[' + separators.join('') + ']')).map(num => parseInt(num, 10));

  return nums.reduce((acc, curr) => acc + curr, 0);
}

export default add;
