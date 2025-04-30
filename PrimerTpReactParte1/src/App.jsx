import { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <Formulario citas={citas} setCitas={setCitas} />
        <Listado citas={citas} setCitas={setCitas} />
      </div>
    </>
  );
}

export default App;

