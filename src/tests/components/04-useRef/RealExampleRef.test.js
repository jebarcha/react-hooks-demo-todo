import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from './../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrarse correctamente el <RealExampleRef />', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('debe de mostar el componente <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });

});
