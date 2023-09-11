/* eslint-disable react/prop-types */
import { useState } from 'react';
import { faqQuestions } from '../../constants/FaqQuestions';
import { FaqQuestion } from './Question';
import { Container } from './styles';

export const Faq = (props) => {
  const [checked, setChecked] = useState(false);

  function onClick() {
    if (checked) {
      props.onNext();
    }
  }

  return (
    <Container>
      <div className="title-wrapper">
        <h1>calculadora de horas complementares</h1>
      </div>
      <div className="subtitle-wrapper">
        <h2>faq</h2>
      </div>
      {faqQuestions.map((e) => (
        <FaqQuestion key={e.answer} answer={e.answer} question={e.question} />
      ))}
      <footer className="footer">
        <p>
          Caso ainda tenha dúvidas, entre em contato com a coordenação do curso.
        </p>
      </footer>
      <div className="check-wrapper">
        <input type="checkbox" onChange={() => setChecked((old) => !old)} />
        <span>
          Concordo que sou do penúltimo período e já tenho acesso à tabela de
          atividades.
        </span>
      </div>
      <div className="button-wrapper">
        <button onClick={onClick} disabled={!checked}>
          Começar
        </button>
      </div>
    </Container>
  );
};
