import * as Icon from '../../icons';
import { Container } from './styles';

export const AdditionalSearch = () => {
  return (
    <Container>
      <input type="text" className="input-search" />
      <button className="button-search" onClick={() => console.log('search')}>
        <Icon.Search />
      </button>
    </Container>
  );
};
