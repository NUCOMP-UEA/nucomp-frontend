/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import * as Icon from "../icons";
import {
  Container,
  Content,
  Input as InputWrapper,
  CertificateInput as CertificateInputWrapper,
  CategoriesInput as CategoriesInputWrapper,
} from "./styles";
import { ToastUtils } from "../../../../utils/Toast.utils";
import { useCalculator } from "../../contexts/Calculator";

const Input = (props) => {
  const { chDone, subtitle, label, ...rest } = props;
  return (
    <InputWrapper chDone={chDone ?? false}>
      <label htmlFor={label}>{label}</label>
      <div className="input-wrapper">
        <input {...rest} />
        <span>{subtitle ?? ""}</span>
      </div>
    </InputWrapper>
  );
};

const CategoriesInput = (props) => {
  const { categories } = useCalculator();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function toggleOptions(event) {
    event.preventDefault();
    setShowOptions((old) => !old);
  }

  function onSelectOption(event, option) {
    event.preventDefault();
    setSelectedOption(option);
    props.onSelect(option._id);
    setShowOptions(false);
  }
  return (
    <CategoriesInputWrapper>
      <label htmlFor="">Curso</label>
      <div className="course-input">
        <button
          className={`course-button ${showOptions ? "course-button-open" : ""}`}
          onClick={toggleOptions}
        >
          <span>{ selectedOption?.idAndDimension ?? " "}</span>
          <Icon.Arrow />
        </button>
        {showOptions ? (
          <div className="course-option-wrapper">
            {categories.map((c, index) => (
              <button
                onClick={(event) => onSelectOption(event, c)}
                className="course-option"
                key={index}
              >
                {c.idAndDimension}
              </button>
            ))}
          </div>
        ) : null}
        <span className="description">
          {selectedOption?.activityType ?? ' '}
        </span>
      </div>
    </CategoriesInputWrapper>
  );
};

const CertificateInput = (props) => {
  const [file, setFile] = useState(null);

  function onGetCertificate() {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.accept = "application/pdf";
    inputFile.name = "Certificado";
    inputFile.onchange = (event) => {
      setFile(event.target.files[0]);
      props.onChange(event.target.files[0]);
    };
    inputFile.click();
  }
  return (
    <CertificateInputWrapper>
      <label>Certificado</label>
      <div className="input-wrapper">
        <div className="input-file">
          <div className="file-name">
            <span>{file !== null ? file.name.replace(".pdf", "") : ""}</span>
          </div>
          <button onClick={onGetCertificate}>
            Escolher <br />
            Arquivo
          </button>
        </div>
        <span>*Formatos Aceitos: .pdf</span>
      </div>
    </CertificateInputWrapper>
  );
};

export const CreateActivityModal = (props) => {
  const form = useRef({
    activity: "",
    institution: "",
    category: null,
    acting: "",
    date: null,
    chDone: 0,
    file: null,
  });

  function formIsValid() {
    const { acting, activity, category, chDone, date, file, institution } =
      form.current;
    const dateIsValid = date !== null && new Date(date) < new Date();
    const result =
      !!acting &&
      !!activity &&
      !!category &&
      !!chDone &&
      !!institution &&
      dateIsValid &&
      file !== null;
    return result;
  }

  function selectCategory(payload) {
    form.current.category = payload;
  }

  function onSubmit() {
    console.log(form.current)
    if (formIsValid()) {
      props.onSubmit(form.current);
    } else {
      ToastUtils.error("Preencha todo o formulário com valores válidos");
    }
  }

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
              label="Atividade"
              placeholder="Atividade 1"
              subtitle="Campo para inserir a atividade que foi realizada"
              onChange={(payload) =>
                (form.current.activity = payload.target.value)
              }
              type="text"
            />
            <Input
              label="Data"
              placeholder="Data"
              onChange={(payload) => (form.current.date = payload.target.value)}
              type="date"
            />
            <Input
              label="Instituição"
              placeholder="Instituição 1"
              subtitle="Campo para inserir a instituição onde a atividade foi realizada"
              onChange={(payload) =>
                (form.current.institution = payload.target.value)
              }
              type="text"
            />
            <Input
              label="Carga Horária cumprida"
              placeholder="0"
              subtitle="Carga horária cumprida"
              onChange={(payload) =>
                (form.current.chDone = payload.target.value)
              }
              chDone={true}
              type="number"
              className="ch-done"
              min={0}
            />
            {/* <Input
              label="Categoria"
              placeholder="Categoria 1"
              subtitle="Campo para selecionar a categoria que a atividade pertence"
              onChange={(payload) =>
                (form.current.category = payload.target.value)
              }
              type="text"
            /> */}
            <CategoriesInput onSelect={selectCategory} />
            <CertificateInput
              onChange={(payload) => (form.current.file = payload)}
            />
            <Input
              label="Atuação"
              placeholder="Atuação 1"
              onChange={(payload) =>
                (form.current.acting = payload.target.value)
              }
              type="text"
              subtitle="Campo para inserir a instituição onde a atividade foi realizada"
            />
            <span></span>
          </main>
          <footer>
            <button onClick={onSubmit}>Adicionar Atividade</button>
          </footer>
        </Content>
      </div>
    </Container>
  );
};
