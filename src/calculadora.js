function addChains(numbers) {
  if (numbers === '') {
    return 0;
  }
  let delimiter = ',';
  const customDelimiterMatch = numbers.match(/^\/\/(\[([^\]]+)\])+/);

  if (customDelimiterMatch) {
    const delimiters = customDelimiterMatch[0].match(/\[([^\]]+)\]/g).map(match => match.slice(1, -1));
    numbers = numbers.slice(customDelimiterMatch[0].length);
    // Reemplazar todas las ocurrencias de los delimitadores personalizados por comas
    delimiters.forEach(customDelimiter => {
      const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      numbers = numbers.replace(new RegExp(escapedDelimiter, 'g'), ',');
    });
  }

  // Utilizamos una expresión regular con comas y guiones para dividir la cadena en números
  const nums = numbers.split(/[,\-]/).map(num => parseInt(num, 10));

  // Ignorar los números mayores a 1000
  const filteredNums = nums.filter(num => num <= 1000);

  return filteredNums.reduce((acc, curr) => acc + curr, 0);
}

export default addChains;
