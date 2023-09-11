/* eslint-disable react/prop-types */
import { Container, StepperOption } from './styles';
import * as Icon from '../../icons';

export const StepperHeader = (props) => (
  <Container>
    <StepperOption checked={props.step === 1}>
      <Icon.User />
    </StepperOption>
    <StepperOption checked={props.step === 2}>
      <Icon.Calculator />
    </StepperOption>
    <StepperOption checked={props.step === 3}>
      <Icon.Check />
    </StepperOption>
  </Container>
);
