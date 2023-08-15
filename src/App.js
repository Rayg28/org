import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
 

// { Header() } , <Header></header> , <header/>  es una llamada a nuestra imagen de header 
function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuidv4(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/genesysrm.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false,
  }
])
  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario : "#57C278",
      colorSecundario: "#D9F7E9",
      
    },

    {
      id: uuidv4(),
      titulo: "Front-End",
      colorPrimario : "#82CFFA",
      colorSecundario: "#E8F8FF",
    },

    {
      id: uuidv4(),
      titulo:"Data-Science",
      colorPrimario : "#A6D157",
      colorSecundario: "#F0F8E2",
    },

    {
      titulo:"Devops",
      colorPrimario : "#E06B69",
      colorSecundario: "#FDE7E8",
    },

    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario : "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },

    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario : "#FFBA05",
      colorSecundario: "#FFF5D9",
    },

    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario : "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
])

  // Ternario -- condicion ?  si es verdadera seMuestra : noSeMuestra
  // condicion && seMuestra
  function cambiarMostrar (){
    actualizarFormulario(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaboradors", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color,id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
        // equipo.colorSecundario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //lista de equipos -- arreglo
//   const equipos = [
    
//     {
//       titulo: "Programación",
//       colorPrimario : "#57C278",
//       colorSecundario: "#D9F7E9",
//     },

//     {
//       titulo: "Front-End",
//       colorPrimario : "#82CFFA",
//       colorSecundario: "#E8F8FF",
//     },

//     {
//       titulo:"Data-Science",
//       colorPrimario : "#A6D157",
//       colorSecundario: "#F0F8E2",
//     },

//     {
//       titulo:"Devops",
//       colorPrimario : "#E06B69",
//       colorSecundario: "#FDE7E8",
//     },

//     {
//       titulo: "UX y Diseño",
//       colorPrimario : "#DB6EBF",
//       colorSecundario: "#FAE9F5",
//     },

//     {
//       titulo: "Móvil",
//       colorPrimario : "#FFBA05",
//       colorSecundario: "#FFF5D9",
//     },

//     {
//       titulo: "Innovación y Gestión",
//       colorPrimario : "#FF8A29",
//       colorSecundario: "#FFEEDF",
//     },
// ]

  //Crear equipo 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div> 
      <Header/>
      {/* { mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      { 
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          /> 
      }
      <MiOrg cambiarMostrar = {cambiarMostrar}/> 
      {/* Recorrer un arrglo */}
      {/* Cada vez que se trabaja con .map, siempre debemos utilizay key */}
      {
        equipos.map( (equipo) => {
          return <Equipo 
          datos = {equipo} 
          key={equipo.titulo} 
          colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          />
        } )
      }
      <Footer/>
    </div>
  );
}

export default App;
