import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from './../HooksApp';
import '@testing-library/jest-dom';

describe('Pruebas en <HooksApp />', () => {

    test('debe mostrar el componente <HooksApp /> correctamente', () => {

        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();

    });


});
