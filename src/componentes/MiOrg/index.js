import { useState } from "react"
import "./MiOrg.css"


function MiOrg (props) {
    console.log(props)
    // Estado - hooks -- son funcionalidades que nos ayudan a trabajar con el comportamiento de react
    // useState -- utiliza el estado - hook
    // useState() -- es una funcion
    // const [nombreVariable, funcioActualiza] = useState(valor Inicial)

    // const [Mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elementp")
    //     actualizarMostrar(!Mostrar)
    // }



    return <section className="orgSection">
        <h3 className="titulo">Mi Organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg