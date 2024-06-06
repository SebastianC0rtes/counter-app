import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba de 06-deses-obj', () => {
    test('usContext retorna una arreglo', () => {
        const clave = 'ABCD';
        const edad = 25;

        const userContext = usContext ({clave, edad} )

        expect(userContext).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        )
     })
 })