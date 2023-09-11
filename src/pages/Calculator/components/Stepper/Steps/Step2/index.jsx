/* eslint-disable react/prop-types */
import { AdditionalHoursTable } from "../../../AdditionalHoursTable";
import { Container, SubmitButton, Step2Header } from "./styles";

export const Step2 = (props) => {
  return (
    <Container>
      <Step2Header>
        <h1>RESUMO</h1>
        <div className="hours">
          <span>
            <strong>140h</strong> lancadas
          </span>
          <span>
            <strong>308h</strong> lancadas
          </span>
        </div>
      </Step2Header>
      <AdditionalHoursTable />
      <SubmitButton onClick={props.onNext}>Submeter</SubmitButton>
    </Container>
  );
};
