/* eslint-disable react/prop-types */
import { StepperHeader } from './StepperHeader';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { Container } from './styles';

export const Stepper = (props) => {
  function onNextStep1(payload) {
    console.log(payload);
    props.setStep(2);
  }
  return (
    <Container>
      <StepperHeader step={props.step} />
      {props.step === 1 ? <Step1 onNext={onNextStep1} /> : null}
      {props.step === 2 ? <Step2 onNext={() => props.setStep(3)} /> : null}
      {props.step === 3 ? <Step3 /> : null}
    </Container>
  );
};
