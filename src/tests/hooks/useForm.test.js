import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './../../hooks/useForm';

describe('pruebas en hook useForm', () => {

    const initialForm = {
        name: 'jose',
        email: 'jose@gmail.com'
    };

    test('debe de regresar un formulario por defecto ', () => {

        const { result } = renderHook(() => useForm(initialForm));

        //console.log(result.current);
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Ringo'
                }
            });

        });

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Ringo' });

    });

    test('debe restablecer el formulario cuando se llame el reset', () => {


        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Ringo'
                }
            });

            reset();

        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);

    });

});
