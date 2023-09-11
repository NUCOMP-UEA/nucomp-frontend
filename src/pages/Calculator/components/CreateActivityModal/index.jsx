import * as Icon from '../icons';
import { Container, Content } from './styles';

export const CreateActivityModal = () => {
  return (
    <Container>
      <div className="content">
        <Content>
          <header className="header">
            <button className="close">
              <Icon.Close />
            </button>
          </header>
        </Content>
      </div>
    </Container>
  );
};
