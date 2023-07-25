import { useState, useEffect } from "react"
import Formulario from "./Components/Formulario"
import Header from "./Components/Header"
import ListaPacientes from "./Components/ListaPacientes"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

    //Guardado en localStorage--Sincroniza el state con lo guardado en 'pacientes'
    useEffect (()=> {
      localStorage.setItem('pacientes', JSON.stringify( pacientes ))
    },[pacientes])



  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !==id)
    
    setPacientes(pacientesActualizados)

  }
  
  return (
    <div className="container mx-auto mt-20">
    <Header
     
    />
    <div className="mt-12 md:flex">
      <Formulario 
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente= {setPaciente}
      />
      <ListaPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
    </div>

    </div>
  )
}

export default App
