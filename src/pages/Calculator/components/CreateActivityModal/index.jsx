/* eslint-disable react/prop-types */
import * as Icon from "../icons";
import { Container, Content, Input as InputWrapper } from "./styles";

const Input = (props) => (
  <InputWrapper>
    <label htmlFor={props.label}>{props.label}</label>
    <input {...props} />
  </InputWrapper>
);

export const CreateActivityModal = (props) => {
  return (
    <Container>
      <div className="content">
        <Content>
          <header className="header">
            <button className="close" onClick={props.onClose}>
              <Icon.Close />
            </button>
          </header>
          <main>
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
            <Input
              label="Nome completo"
              placeholder="Nome completo"
              // onChange={(payload) => (form.current.name = payload.target.value)}
              type="text"
            />
          </main>
        </Content>
      </div>
    </Container>
  );
};
