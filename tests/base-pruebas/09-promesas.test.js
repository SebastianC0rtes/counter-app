import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-Promesas', () => {
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero =>{
            expect(hero).toStrictEqual(    {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();

        } )
    })

    test('getHeroeByIdAsync debe de robtener un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync( id )
        .catch( error=> {
            console.log( error );
            done();
        } )
    })
 })