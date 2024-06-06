import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba en 07-deses-arr', () => {
    test('Debe retornar un string y un número ', () => {

        const [ leters, numbers ] = retornaArreglo ();

        expect (leters).toBe('ABC');
        expect (numbers).toBe(123);

        // console.log(typeof leters); //Conocer el tipo de dato que es
        // console.log(typeof numbers);

        expect(typeof leters).toBe('string'); //Conocer el tipo de dato que es
        expect(typeof numbers).toBe('number');

        expect( leters ).toEqual( expect.any(String) ); //Recibe cualqeuir tipo de string
    })
 });