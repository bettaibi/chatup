import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import OverrideStepper from './..';


const MockedOverrideStepper = () => {

    return (
        <OverrideStepper
            labels="step1,step2,step3"
            actionsButtons={
                (handleNext, handleBack, activeStep, steps) => (
                    <div>
                        <button onClick={handleBack} disabled={activeStep === 0}>Previous step</button>

                        {
                            activeStep < (steps - 1) ?
                                <button onClick={handleNext}
                                    data-testid="nextBtn">Next step</button> :
                                <button type="submit">Submit</button>
                        }
                    </div>
                )
            }
        >
            {/* Step 1 */}
            <div>
                this is the step number 1
            </div>

            {/* Step 2 */}
            <div>
                this is the step number 2
            </div>

            {/* Step 3 */}
            <div>
                this is the step number 3
            </div>
        </OverrideStepper>
    )
}

describe('OverrideStepper Component', () => {

    afterEach(cleanup);

    it('number of steps should be rendered properly', () => {
        render(<MockedOverrideStepper />);
        const stepsElem = screen.queryAllByTestId('step');
        expect(stepsElem.length).toBe(3);
    });

    it('should pass to next step when clicking on the next btn', async () => {
        render(<MockedOverrideStepper />);
        const nextbtn = screen.getByTestId('nextBtn');
        fireEvent.click(nextbtn);
        const stepContent = screen.queryAllByTestId('stepContent');

        await waitFor(() => {
            expect(stepContent[0].lastElementChild).not.toBeVisible();
            expect(stepContent[1].lastElementChild).toBeVisible();
            expect(stepContent[2].lastElementChild).not.toBeVisible();
        })

    });
})
