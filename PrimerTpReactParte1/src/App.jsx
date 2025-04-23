import { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css';

function App() {
return (
  <>
  <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div class="container">
        <Formulario />
        <Listado />
    </div>
  </>
  );
}

export default App;
