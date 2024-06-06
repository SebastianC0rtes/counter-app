import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Prueba de 05-funciones', () => {
     test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
            };
        const user = getUser();

        // expect( testUser ).toBe( user ); No funciona porque esta apuntando a diferentes espacios de memoria
        // expect( testUser ).toStrictEqual( user ); //Opción 1
        expect( testUser ).toEqual( user ); //Opción 2 (Recomendada)

      })

      test('getUsuarioActivo debe de retornar un objeto', () => {
          const name = 'Fernando'
          const user = getUsuarioActivo( name );

          expect(user).toStrictEqual({
              uid: 'ABC567',
              username: name
          }
          )
        })
});