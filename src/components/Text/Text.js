import "./Text.css"

const Text = (props) =>{
    const modifiedPlaceholder = `${props.placeholder}...`
    //Destructuración
    const { type="text" } = props

    const manageValue = (e) =>{
        props.updateValue(e.target.value)
    }
    return <div className={`text ${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={modifiedPlaceholder} 
            required={props.required}
            value={props.value}
            onChange={manageValue}
            type={type}
        />
    </div>
}

export default Text