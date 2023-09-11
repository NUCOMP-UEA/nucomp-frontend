/* eslint-disable react/prop-types */
import { Container } from "./styles"

export const Pagination = (props) => {
    return <Container>
        <div className="pagination">
            <span className="pages">{props.firstItem}-{props.lastItem} de {props.totalItems}</span>
            <button className="arrow">&lt;</button>
            <button className="arrow">&gt;</button>
        </div>
    </Container>
}