import React from 'react'
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    
    // Esta no va, la librería se cambió
    // test('Debe  de mostrar el mensaje "Hola, Soy Esteban"', () => {
        
    //     const saludo = 'Hola, soy Esteban';

    //     const { getByText } = render( <PrimeraApp saludo= {saludo}/> )

    //     expect( getByText( saludo ) ).toBeInTheDocument();

    // })
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola Soy Esteban'
        const wrapper = shallow( <PrimeraApp saludo={saludo} />);
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola Soy Esteban'
        const subtitulo = 'Soy un coso'
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitulo );
    })
    
    
    
})
