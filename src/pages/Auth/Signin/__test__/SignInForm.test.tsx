import { screen, cleanup, render, fireEvent, waitFor} from '@testing-library/react';
import SignInForm from '../SignInForm';


describe('test signin component', () => {

    afterEach(() => cleanup());

    it('Should render empty values in the initial render', async () => {
        render(<SignInForm />)
        const emailElem: any = screen.getByPlaceholderText(/Please input your E-mail!/i);
        const passElem: any =  screen.getByPlaceholderText(/Please input your password!/i);

        // WaitFor to handle Formik Warn
        await waitFor(()=> {
            expect(passElem.value).toBe('');
            expect(emailElem.value).toBe('');
        });

    });

    it('Should render with a new value while typing', async () => {
        render(<SignInForm />)
        const emailElem: any = screen.getByPlaceholderText(/Please input your E-mail!/i);
        const passElem: any =  screen.getByPlaceholderText(/Please input your password!/i);

        fireEvent.change(emailElem, {target: {value: 'this is an email'}});
        fireEvent.change(passElem, {target: {value: 'this is a password'}});

        await waitFor(()=> {
         expect(emailElem.value).toBe('this is an email');
         expect(passElem.value).toBe('this is a password');
        });
    });

    it('form should submit data properly', async() => {
        render(<SignInForm />)
        const emailElem: any = screen.getByPlaceholderText(/Please input your E-mail!/i);
        const passElem: any =  screen.getByPlaceholderText(/Please input your password!/i);
        const submitBtnElem: any = screen.getByRole('button', {name: /sign in/i});

        fireEvent.change(emailElem, {target: {value: 'example@gmail.com'}});
        fireEvent.change(passElem, {target: {value: '123456789'}});

        fireEvent.click(submitBtnElem);

        await waitFor(()=> {
            expect(passElem.value).toBe('');
            expect(emailElem.value).toBe('');
        });
    });

});