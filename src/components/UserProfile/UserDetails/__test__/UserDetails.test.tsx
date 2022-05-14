import {cleanup, render} from '@testing-library/react';
import UserDetails from './..';

describe('User Details Component', () => {

    afterEach(() => cleanup());

    it('should render all user details', async()=> {
        const {queryByTestId} = render(<UserDetails isEdited={false} />);

        expect(queryByTestId("userDetailsContainer")?.childElementCount).toBe(6);
    });

    it('should render all user details', async()=> {
        const {queryByTestId} = render(<UserDetails isEdited={true} />);

        expect(queryByTestId('user_form')).toBeInTheDocument();
        expect(queryByTestId('user_form')?.childElementCount).toBe(4);
    });

});