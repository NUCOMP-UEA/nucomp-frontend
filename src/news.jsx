export function News(props) {
    return (
        <div>
            <h1>{props.headline}</h1>
            <strong>{props.date}</strong>
            <p>{props.lead}</p>
        </div>
    )
}