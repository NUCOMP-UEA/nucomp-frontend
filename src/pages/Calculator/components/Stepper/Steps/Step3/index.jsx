import { Container, Button } from "./styles";
import * as Icon from "../../../icons";

export const Step3 = () => {
  return (
    <Container>
      <div className="check-icon">
        <Icon.Conclusion />
      </div>
      <div className="texts">
        <span className="title">
          Parabéns, sua simulação foi concluída com sucesso!
        </span>
        <span className="description">
          A coordenação ficará responsável por fazer a análise dos dados
          enviados e dará retorno em breve. Lembre-se de verificar o seu email
          institucional, e que a submissão no protocolo virtual deverá ser feita
          SOMENTE após a coordenação aprovar a simulação. Enquanto isso, que tal
          aprender como fazer a submissão no protocolo virtual?
        </span>
        <Button to="/">
          <span>Tutorial Protocolo Virtual</span>
        </Button>
        <Button to="/">
          <span>Voltar à pagina inicial</span>
        </Button>
      </div>
    </Container>
  );
};
