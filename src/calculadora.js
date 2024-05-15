function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  let delimiter = ',';
  const customDelimiterMatch = numbers.match(/^\/\/\[([^\]]+)\]\n/);

  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[1];
    numbers = numbers.slice(customDelimiterMatch[0].length);
    // Reemplazar todas las ocurrencias del delimitador personalizado por comas
    numbers = numbers.replace(new RegExp('\\' + delimiter, 'g'), ',');
  }

  // Utilizamos una expresión regular con comas y guiones para dividir la cadena en números
  const nums = numbers.split(/[,\-]/).map(num => parseInt(num, 10));

  return nums.reduce((acc, curr) => acc + curr, 0);
}

export default add;
