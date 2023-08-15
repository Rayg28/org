import "./ListaOpciones.css"

function ListaOpciones (props) {

    //Metodo map -> arreglo.map ( (equipo, index) => {
        //return <option> </option>
    //  } )
    // const equipos = [
    //     "Programacion",
    //     "Front-End",
    //     "Data-Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión",
    // ]

    function manejarCambio  (evento) {
        console.log("cambio", evento.target.value)
        props.setValor(evento.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            { props.equipos.map( (equipo, index) =>{
                return <option key={index} value={equipo} > {equipo} </option>
            }) }
        </select>
    </div>
}

export default ListaOpciones