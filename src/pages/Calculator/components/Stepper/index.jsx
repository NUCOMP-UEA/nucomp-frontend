/* eslint-disable react/prop-types */
import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";
import { Container, StepperHeader, StepperOption } from "./styles";
import * as Icon from "../icons";
import { api } from "../../../../utils/Request.utils";
import { useCalculator } from "../../contexts/Calculator";
import { isAxiosError } from "axios";
import { ToastUtils } from "../../../../utils/Toast.utils";

const messageErrors = {
  ["unauthorized.invalidEmailDomain"]: "O email está fora do domínio da UEA",
  ["badRequest.incoherentFieldDatabase"]:
    "A carga horário cumprida ultrapassou o limite para a categoria selecionada",
};

export const Stepper = (props) => {
  const { setStudentId, setCategories, submitActivities } = useCalculator();
  async function onNextStep1(payload) {
    try {
      const user = (
        await api.post("/student/", {
          email: payload.email,
          enrollment: payload.registration,
          name: payload.name,
          course: payload.course,
        })
      ).data;
      const categories = (await api.get("/activity/type/")).data;
      setCategories(categories);
      setStudentId(user._id);
      props.setStep(2);
    } catch (err) {
      if (isAxiosError(err)) {
        ToastUtils.error(messageErrors[err.response.data.code]);
      }
    }
  }

  async function onNextStep2() {
    try {
      await submitActivities();
      ToastUtils.success("Atividades enviadas por e-mail com sucesso");
      props.setStep(3)
    } catch (error) {
      ToastUtils.error("Não foi possível enviar o e-mail");
    }
  }
  return (
    <Container>
      <StepperHeader>
        <StepperOption checked={props.step === 1}>
          <Icon.User />
        </StepperOption>
        <StepperOption checked={props.step === 2}>
          <Icon.Calculator />
        </StepperOption>
        <StepperOption checked={props.step === 3}>
          <Icon.Check />
        </StepperOption>
      </StepperHeader>
      {props.step === 1 ? <Step1 onNext={onNextStep1} /> : null}
      {props.step === 2 ? <Step2 onNext={onNextStep2} /> : null}
      {props.step === 3 ? <Step3 /> : null}
    </Container>
  );
};
