import add from "./calculadora.js";

describe('add', () => {
  it('deberia devolver 0 para una cadena vacia', () => {
    expect(add('')).toBe(0);
  });
  it('debería devolver el número mismo para una cadena que contiene un solo número', () => {
    expect(add('2')).toBe(2);
  });
 
});
