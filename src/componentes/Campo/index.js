import { useState } from "react"
import "./Campo.css"

function Campo(props){
    // const [valor, setValor] = useState("")
    // console.log("datos:", props)
    const placeholderModificado = `${props.placeholder}...`
    //Destructuracion 
    const {type = "text"} = props
    

    const manejarCambio = (evento) => {
        console.log("cambio", evento.target.value)
        props.setValor(evento.target.value)
    }

    return (<div className={`campo campo-${type}`}>
        <label> {props.titulo} </label> 
        <input  
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange = {manejarCambio}
            type={type}
        />
    
    </div>)
}

export default Campo