import {cleanup, render} from '@testing-library/react';
import Header from './..';

const MockedHeader = ({isEdited = false}: {isEdited: boolean}) => {

    return(
        <Header isEdited = {isEdited} actionsBtn={<button>{isEdited? 'Cancel':'Edit'}</button>} />
    )
}

describe('User Profile, Header Component', () => {

    afterEach(() => cleanup());

    it('should render with no edited avatar', async()=> {
        const {findByRole, findByAltText} = render(<MockedHeader isEdited={false} />);

        expect(await findByRole('button', {name: /edit/i})).toHaveTextContent('Edit');
        expect(await findByAltText(/user_avatar/i)).toBeInTheDocument();
    });

    it('should render edited avatar zone', async()=> {
        const {queryByRole, queryByAltText} = render(<MockedHeader isEdited={true} />);

        expect( queryByRole('button', {name: /Cancel/i})).toHaveTextContent('Cancel');
        expect( queryByAltText(/user_avatar/i)).not.toBeInTheDocument();
        expect( queryByAltText(/avatar_to_edit/i)).toBeInTheDocument();
    });

});