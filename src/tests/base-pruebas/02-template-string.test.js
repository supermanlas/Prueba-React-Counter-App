import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Esteban! ', () => {
        
        const nombre = 'Esteban';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre + '!');

    })


    // getSaludo debe de retornar Hola Carlos! si no hay argumentos en nombre
    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre ', () => {

        const saludo = getSaludo( );
        expect( saludo ).toBe('Hola Carlos!');

    })
    
})
