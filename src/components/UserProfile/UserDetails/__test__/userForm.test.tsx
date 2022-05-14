import {cleanup, render, fireEvent} from '@testing-library/react';
import UserForm from './../UserForm';

describe('User Form Component', () => {

    afterEach(() => cleanup());

    it('render Error message when username input has no value', async()=> {
        const {findByTestId, getByRole} = render(<UserForm />);
        const submitBtn = getByRole('button', {name: /Save Changes/i});
        fireEvent.click(submitBtn);

        expect(await findByTestId("username")).toBeInTheDocument();
    });

    it('render Error message when phone number has greater than 8 digits', async()=> {
        const {findByTestId, getByPlaceholderText} = render(<UserForm />);
        const phoneInput = getByPlaceholderText(/Please input your phone!/i);
        fireEvent.change(phoneInput, {target: {value:'123456789'}});
        fireEvent.blur(phoneInput);

        expect(await findByTestId("phone")).toHaveTextContent(/Phone must have 8 digits/i);
    });


});