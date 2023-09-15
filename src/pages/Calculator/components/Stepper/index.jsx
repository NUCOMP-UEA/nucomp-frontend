/* eslint-disable react/prop-types */
import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";
import { Container, StepperHeader, StepperOption } from "./styles";
import * as Icon from "../icons";

export const Stepper = (props) => {
  function onNextStep1(payload) {
    console.log(payload);
    props.setStep(2);
  }
  return (
    <Container>
      <StepperHeader>
        <StepperOption checked={props.step === 1}>
          <Icon.User />
        </StepperOption>
        <StepperOption checked={props.step === 2}>
          <Icon.Calculator />
        </StepperOption>
        <StepperOption checked={props.step === 3}>
          <Icon.Check />
        </StepperOption>
      </StepperHeader>
      {props.step === 1 ? <Step1 onNext={onNextStep1} /> : null}
      {props.step === 2 ? <Step2 onNext={() => props.setStep(3)} /> : null}
      {props.step === 3 ? <Step3 /> : null}
    </Container>
  );
};
