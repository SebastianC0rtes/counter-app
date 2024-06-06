describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe fallar', () => {
        //1. Inicicializar
        const message1 = 'Hola mundo'
        //2. Estímulo
        const message2 = message1.trim();

        //3. Observar el comportamiento
        // expect ( message1 ).toBe ( message2 )
        expect( message1 ).toBe( message2 )
    })
})