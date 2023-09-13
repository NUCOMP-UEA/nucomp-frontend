import { useState } from "react";
import { Container } from "./styles";
import { Faq } from "./components/Faq";
import { Stepper } from "./components/Stepper";

const Calculator = () => {
  const [step, setStep] = useState(2);

  return (
    <Container>
      <div className="content">
        {step === 0 ? <Faq onNext={() => setStep(1)} /> : null}
        {step > 0 ? (
          <Stepper step={step} setStep={(aStep) => setStep(aStep)} />
        ) : null}
      </div>
    </Container>
  );
};

export default Calculator;
