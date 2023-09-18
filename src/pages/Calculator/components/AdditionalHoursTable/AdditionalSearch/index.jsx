import { useRef } from "react";
import * as Icon from "../../icons";
import { Container } from "./styles";

export const AdditionalSearch = () => {
  const searchRef = useRef("");

  function onSearch(event) {
    event.preventDefault();
    if (searchRef.current) {
      console.log(searchRef.current);
    }
  }
  return (
    <Container>
      <input
        type="text"
        className="input-search"
        onChange={(event) => (searchRef.current = event.target.value)}
      />
      <button className="button-search" onClick={onSearch}>
        <Icon.Search />
      </button>
    </Container>
  );
};
