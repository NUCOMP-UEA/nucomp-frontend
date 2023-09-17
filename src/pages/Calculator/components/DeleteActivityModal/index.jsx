/* eslint-disable react/prop-types */
import { Container, Content, WarningIcon } from "./styles";

export const DeleteActivityModal = (props) => {
  return (
    <Container>
      <div className="content">
        <Content>
          <main>
            <WarningIcon />
            <div className="texts">
              <span>
                Atenção! <br /> Deseja mesmo excluir essa atividade?
              </span>
            </div>
          </main>
          <footer>
            <button onClick={props.onClose}>Não</button>
            <button onClick={props.onDelete}>Sim</button>
          </footer>
        </Content>
      </div>
    </Container>
  );
};
