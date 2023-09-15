/* eslint-disable react/prop-types */
import { useCalculator } from "../../../../contexts/Calculator";
import { AdditionalHoursTable } from "../../../AdditionalHoursTable";
import { Container, SubmitButton, Step2Header } from "./styles";

export const Step2 = (props) => {
  const { hours } = useCalculator();
  return (
    <Container>
      <Step2Header>
        <h1>RESUMO</h1>
        <div className="hours">
          <span>
            <strong>{hours.released}h</strong> lancadas
          </span>
          <span>
            <strong>{hours.done}h</strong> cumpridas
          </span>
        </div>
      </Step2Header>
      <AdditionalHoursTable />
      <SubmitButton onClick={props.onNext}>Submeter</SubmitButton>
    </Container>
  );
};
