import add from "./calculadora.js";

describe('add', () => {
  it('deberia devolver 0 para una cadena vacia', () => {
    expect(add('')).toBe(0);
  });
 
});
