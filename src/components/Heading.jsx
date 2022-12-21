function Heading(props) {
    return (
        <div className="col">
            <h1 style={{color: props.headingColor}}>{props.heading}</h1>
        </div>

    )
}

export default Heading;