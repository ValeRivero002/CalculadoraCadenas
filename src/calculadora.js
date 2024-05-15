function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  let delimiter = ',';
  const customDelimiterMatch = numbers.match(/^\/\/\[([^\]]+)\]\n/);

  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[1];
    numbers = numbers.slice(customDelimiterMatch[0].length);
    // Escapar caracteres especiales en el delimitador personalizado antes de usarlo en la expresión regular
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Reemplazar todas las ocurrencias del delimitador personalizado por comas
    numbers = numbers.replace(new RegExp(escapedDelimiter, 'g'), ',');
  }

  // Utilizamos una expresión regular con comas y guiones para dividir la cadena en números
  const nums = numbers.split(/[,\-]/).map(num => parseInt(num, 10));

  // Ignorar los números mayores a 1000
  const filteredNums = nums.filter(num => num <= 1000);

  return filteredNums.reduce((acc, curr) => acc + curr, 0);
}

export default add;
