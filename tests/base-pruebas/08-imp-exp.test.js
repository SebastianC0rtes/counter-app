import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes'
describe('Prueba 08-imp-exp', () => {
    test('getHeroesById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );
        expect(hero).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        )
    })
    test('getHeroesById debe de retornar un héroe undefined', () => {
        const id =7;
        const hero = getHeroeById( id );
        // expect(hero).toEqual( undefined);
        expect( hero ).toBeFalsy(); //Tenga un valor nulo (null,undefined o false)
    })

    //Tarea
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroeDC = getHeroesByOwner( owner );

        expect(heroeDC.length).toBe (3);
        //Forma 1 no tan eficiente
        // expect(heroeDC).toEqual (
        //     [{
        //         id: 1,
        //         name: 'Batman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 3,
        //         name: 'Superman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 4,
        //         name: 'Flash',
        //         owner: 'DC'
        //     }]
        // );
        //Forma 2 manera mas optima en caso de agregarse un nuevo heroe en el listado
        expect(heroeDC).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

    })
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroeMarvel = getHeroesByOwner( owner );

        expect(heroeMarvel.length).toBe (2);
    })

 })