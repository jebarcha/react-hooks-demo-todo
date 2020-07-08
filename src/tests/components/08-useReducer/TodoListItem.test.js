import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from './../../../components/08-useReducer/TodoListItem';
import { demoTodos } from './../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<TodoListItem
        i={0}
        todo={demoTodos[0]}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
    />);

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de llamar la funcion borrar handleDelete', () => {
        //jest.fn();
        //toHaveBeenCalledWith
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('debe de llamar la funcion toggle handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        // contenido del parrafo
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);

    });

    test('debe de tener la clase complete si el TODO.done es true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem
            todo={todo}
        />);

        //console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });



});
