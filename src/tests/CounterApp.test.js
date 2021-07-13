import React from 'react'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp'

describe('Pruebas para componente <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp />); //esto es para el intellisense

    beforeEach( () => {

        wrapper = shallow( <CounterApp />); //Todo lo que se coloque aquí, al comenzar el test se reinicia

    })
    
    test('Debe de mostrar <CounterApp /> correctamente ', () => {


        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp value={100}/>);
        const textoValor = wrapper.find('h2').text().trim();
        
        expect( textoValor ).toBe( '100' );
    })
    

    test('Debe de incrementar con el botón de +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const textoValor = wrapper.find('h2').text().trim();

        expect( textoValor ).toBe('11');

    })

    test('Debe de disminuir con el botón de -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const textoValor = wrapper.find('h2').text().trim();
    
        expect( textoValor ).toBe('9');

    })
    
    test('Debe de colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow( <CounterApp value={108}/>);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const textoValor = wrapper.find('h2').text().trim();

        expect(textoValor).toBe('108');
        
    })
    
    
})
