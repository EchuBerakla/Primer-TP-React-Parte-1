import { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div class="container">
    <div class="row">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="contenido">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
    </div>
  );
}

export default App;
