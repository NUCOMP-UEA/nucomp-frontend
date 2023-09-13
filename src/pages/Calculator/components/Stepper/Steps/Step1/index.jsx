/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Container, Input as InputWrapper } from "./styles";
import { FormValidation } from "../../../../../../utils/FormValidation.utils";

const Input = (props) => (
  <InputWrapper>
    <label htmlFor={props.label}>{props.label}</label>
    <input {...props} />
  </InputWrapper>
);

export const Step1 = (props) => {
  const form = useRef({
    name: "",
    registration: "",
    email: "",
    course: "",
  });

  function formIsValid() {
    const result =
      FormValidation.email(form.current.email) &&
      FormValidation.registration(form.current.registration) &&
      form.current.course.length &&
      form.current.name.length;
    return result;
  }

  function onSubmit() {
    if (formIsValid()) {
      props.onNext(form.current);
    }
  }
  return (
    <Container>
      <h1 className="title">Informações Pessoais</h1>
      <form className="form">
        <Input
          label="Nome completo"
          placeholder="Nome completo"
          onChange={(payload) => (form.current.name = payload.target.value)}
          type="text"
        />
        <Input
          label="Número de Matrícula"
          placeholder="Matrícula"
          onChange={(payload) =>
            (form.current.registration = payload.target.value)
          }
          type="number"
          min={0}
        />
        <Input
          label="Email"
          placeholder="Email"
          onChange={(payload) => (form.current.email = payload.target.value)}
          type="email"
        />
        <Input
          label="Curso"
          placeholder="Curso"
          onChange={(payload) => (form.current.course = payload.target.value)}
          type="text"
        />
      </form>
      <button
        disabled={!formIsValid}
        onClick={onSubmit}
        className="button-submit"
      >
        Próximo
      </button>
    </Container>
  );
};
