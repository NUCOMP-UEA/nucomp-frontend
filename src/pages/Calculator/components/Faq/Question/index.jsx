/* eslint-disable react/prop-types */
import { Container } from './styles';
import * as Icon from '../../icons';
import { useState } from 'react';

export const FaqQuestion = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <Container selected={selected} onClick={() => setSelected((old) => !old)}>
      <div className="question-wrapper">
        <span>{props.question}</span>
        <Icon.Arrow />
      </div>
      {selected ? (
        <div className="answer-wrapper">
          <p>{props.answer}</p>
        </div>
      ) : null}
    </Container>
  );
};
