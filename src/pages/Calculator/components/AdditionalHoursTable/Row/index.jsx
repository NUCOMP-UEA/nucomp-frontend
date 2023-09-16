/* eslint-disable react/prop-types */
import { useCalculator } from "../../../contexts/Calculator";
import { ButtonCheck } from "../ButtonCheck";
import { Container } from "./styled";

export const Row = (props) => {
  const { categories } = useCalculator();
  return (
    <Container>
      {props.rows.map((row, index) => {
        const formatedDate = new Intl.DateTimeFormat("pt-BR").format(
          new Date(row.endDate)
        );
        return (
          <div className="row" key={index}>
            <div
              style={{
                height: "60px",
                backgroundColor: row.isChecked ? "#8b83ba" : "transparent",
              }}
            ></div>
            <ButtonCheck
              isChecked={row.isChecked}
              setIsChecked={(payload) => props.onClickCheck(index, payload)}
            />
            <span className="item">{row.activity}</span>
            <span className="item">{row.institution}</span>
            <span className="item">
              {categories.find((c) => c._id === row.category)}
            </span>
            <span className="item">{row.area}</span>
            <span className="item">{formatedDate}</span>
            <span className="item">{row.accomplishedWorkload}</span>
            <span className="item">{row.postedWorkload}</span>
            <span className="item"></span>
          </div>
        );
      })}
    </Container>
  );
};
