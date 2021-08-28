import './Button.css'

const Button = props => {

    let classes = 'Button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button className={classes} 
                onClick={() => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}

export default Button