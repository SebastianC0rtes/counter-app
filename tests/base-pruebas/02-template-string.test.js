import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => {
    test('gestSaludo debe retornar "Hola fernando"', () => {

         const name = 'Fernando';
         const message = getSaludo ( name )

        expect( message ).toBe(`Hola ${ name }`);

    });
});