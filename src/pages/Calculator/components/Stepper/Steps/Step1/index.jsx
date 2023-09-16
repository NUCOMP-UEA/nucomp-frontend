/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import {
  Container,
  Input as InputWrapper,
  CourseInput as CourseInputWrapper,
} from "./styles";
import { FormValidation } from "../../../../../../utils/FormValidation.utils";
import { ToastUtils } from "../../../../../../utils/Toast.utils";
import * as Icon from "../../../icons";

const categories = {
  LIC: "Licenciatura de Computação",
  SI: "Sistemas de Informação",
  ECP: "Engenharia de Computação",
};

const Input = (props) => (
  <InputWrapper>
    <label htmlFor={props.label}>{props.label}</label>
    <input {...props} />
  </InputWrapper>
);

const CourseInput = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function toggleOptions(event) {
    event.preventDefault();
    setShowOptions((old) => !old);
  }

  function onSelectOption(event, option) {
    event.preventDefault();
    setSelectedOption(option);
    props.onSelect(option);
    setShowOptions(false);
  }
  return (
    <CourseInputWrapper>
      <label htmlFor="">Curso</label>
      <div className="course-input">
        <button
          className={`course-button ${showOptions ? "course-button-open" : ""}`}
          onClick={toggleOptions}
        >
          <span>{categories[selectedOption] || " "}</span>
          <Icon.Arrow />
        </button>
        {showOptions ? (
          <div className="course-option-wrapper">
            <button
              onClick={(event) => onSelectOption(event, "ECP")}
              className="course-option"
            >
              Engenharia de Computação
            </button>
            <button
              onClick={(event) => onSelectOption(event, "LIC")}
              className="course-option"
            >
              Licenciatura de Computação
            </button>
            <button
              onClick={(event) => onSelectOption(event, "SI")}
              className="course-option"
            >
              Sistemas de Informação
            </button>
          </div>
        ) : null}
      </div>
    </CourseInputWrapper>
  );
};

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
    } else {
      ToastUtils.error("Preencha todos os dados corretamente");
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
          maxLength={10}
        />
        <Input
          label="Email"
          placeholder="Email"
          onChange={(payload) => (form.current.email = payload.target.value)}
          type="email"
        />
        <CourseInput onSelect={(payload) => (form.current.course = payload)} />
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
