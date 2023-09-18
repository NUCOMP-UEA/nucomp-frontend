/* eslint-disable react/prop-types */
import * as Icon from '../../icons';
import { Container, ContainerHeader } from './styles';

export const ButtonCheck = (props) => (
  <Container
    ischecked={props.isChecked ? 'checked' : 'not-checked'}
    onClick={() => props.setIsChecked(!props.isChecked)}
  >
    {props.isChecked && <Icon.Check />}
  </Container>
);

export const ButtonCheckHeader = (props) => (
  <ContainerHeader
    ischecked={props.isChecked ? 'checked' : 'not-checked'}
    onClick={() => props.setIsChecked(!props.isChecked)}
  >
    {props.isChecked && <Icon.Check />}
  </ContainerHeader>
);
