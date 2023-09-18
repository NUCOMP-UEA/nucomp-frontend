/* eslint-disable react/prop-types */
import { useCalculator } from "../../contexts/Calculator";
import { Container } from "./styles";

export const Pagination = () => {
  const { pagination } = useCalculator();
  return (
    <Container>
      <div className="pagination">
        <span className="pages">
          {pagination.firstItem}-{pagination.lastItem} de
          {pagination.totalItems}
        </span>
        <button className="arrow">&lt;</button>
        <button className="arrow">&gt;</button>
      </div>
    </Container>
  );
};
