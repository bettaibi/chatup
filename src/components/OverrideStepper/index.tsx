import React from 'react';
import {
    Box,
    Button,
    Stepper,
    Step,
    StepLabel,
    StepContent
} from '@mui/material';
import { render } from '@testing-library/react';

interface OverrideStepperProps {
    children: JSX.Element[];
    labels: string; // An immutable string separate by comma
    actionsButtons: (handleNext: ()=> void, handleBack: ()=> void, activeStep: number, steps: number) => JSX.Element;
}

const OverrideStepper: React.FC<OverrideStepperProps> = ({ children, labels, actionsButtons}) => {
    const labelList = labels.trim().split(',');
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return (
        <React.Fragment>
            <Stepper activeStep={activeStep} orientation="vertical">
                {
                    children.map((child: JSX.Element, index: number) => (
                        <Step key={"step" + index} data-testid="step">
                            <StepLabel>
                                {labelList[index]}
                            </StepLabel>
                            <StepContent TransitionProps={{ unmountOnExit: false }} data-testid="stepContent">
                                {child}
                            </StepContent>
                        </Step>
                    ))
                }
            </Stepper>

            <React.Fragment>
                {
                    actionsButtons(handleNext, handleBack, activeStep, children.length)
                }
            </React.Fragment>
        </React.Fragment>
    )
}

export default OverrideStepper;