import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas con async- await y Fetch', () => {
    
    test('Debe retornar el url de la imagen', async() => {
        
        const url = await getImagen();
        expect( url.includes('https://') ).toBe( true );

    })
    
})
