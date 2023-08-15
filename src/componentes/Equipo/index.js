import './Equipo.css'
import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'

function Equipo  (props){
    // Destructuracion
    const { colorPrimario, colorSecundario } = props.datos
    const {titulo, id} = props.datos
    const {colaboradores} = props
    const {eliminarColaborador,actualizarColor,like} = props
    // const color = {
    //     backgroundColor: props.datos.colorSecundario
    // }
    const color = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    return <> 
        { colaboradores.length > 0 && 
        <section className="equipo" style={ color }>
            <input className='input-color'
                type="color"
                value={colorSecundario}
                onChange={(evento) =>{
                    actualizarColor(evento.target.value, id)
                }}
    
            />
            {/* <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3> */}
            <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
            <div className = "colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Colaborador 
                        key={index} 
                        datos = {colaborador} 
                        colorPrimario = {colorPrimario} 
                        eliminarColaborador = {eliminarColaborador}
                        like = {like}
                    /> )
                }
            </div>
        </section>
        }
    </>
}

export default Equipo