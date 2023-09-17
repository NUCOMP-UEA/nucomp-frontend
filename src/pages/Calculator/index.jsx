import { useState } from "react";
import { Container } from "./styles";
import { Faq } from "./components/Faq";
import { Stepper } from "./components/Stepper";
import { CalculatorProvider } from "./contexts/Calculator";

const Calculator = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <CalculatorProvider>
        <div className="content">
          {step === 0 ? <Faq onNext={() => setStep(1)} /> : null}
          {step > 0 ? (
            <Stepper step={step} setStep={(aStep) => setStep(aStep)} />
          ) : null}
        </div>
      </CalculatorProvider>
    </Container>
  );
};

export default Calculator;
