import add from "./calculadora.js";

describe('add', () => {
  it('deberia devolver 0 para una cadena vacia', () => {
    expect(add('')).toBe(0);
  });
  it('debería devolver el número mismo para una cadena que contiene un solo número', () => {
    expect(add('2')).toBe(2);
  });
  it('debería devolver la suma de dos números separados por coma', () => {
    expect(add('1,2')).toBe(3);
  });
  it('debería devolver la suma de varios números separados por coma', () => {
    expect(add('1,2,3')).toBe(6);
  });
  it('debería manejar cadenas con diferentes separadores', () => {
    expect(add('1,2-3')).toBe(6);
  });
  it('debería manejar un delimitador personalizado', () => {
    expect(add('//[;]\n6;7;4')).toBe(17);
  });
  it('debería manejar un delimitador personalizado', () => {
    expect(add('//[;]\n6,3-2;1')).toBe(12);
  });
  it('debería ignorar los números mayores a 1000', () => {
    expect(add('2,1001')).toBe(2);
  });


});
