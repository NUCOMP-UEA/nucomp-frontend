/* eslint-disable react/prop-types */
import { ButtonCheck } from "../ButtonCheck";
import { Container } from "./styled";

export const Row = (props) => {
  return (
    <Container>
      {props.rows.map((row, index) => (
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
          <span className="item">{row.category}</span>
          <span className="item">{row.acting}</span>
          <span className="item">{row.data.toDateString()}</span>
          <span className="item">{row.chDone}</span>
          <span className="item">{row.chUp}</span>
          <span className="item"></span>
        </div>
      ))}
    </Container>
  );
};
