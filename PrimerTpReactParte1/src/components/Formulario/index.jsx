import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ citas, setCitas }) => {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''
    ) {
      return;
    }

    const nuevaCita = {
      mascota: mascota,
      propietario: propietario,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    };

    const nuevasCitas = [];
    citas.forEach(function(cita) {
      nuevasCitas.push(cita);
    });
    nuevasCitas.push(nuevaCita);
    setCitas(nuevasCitas);

    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={function(e) { setMascota(e.target.value); }}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={propietario}
          onChange={function(e) { setPropietario(e.target.value); }}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={function(e) { setFecha(e.target.value); }}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={function(e) { setHora(e.target.value); }}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={function(e) { setSintomas(e.target.value); }}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;

/*

import './Formulario.css';

const Formulario = () => {
  return (
    <div class="one-half column">
      <h2>Crear mi Cita</h2>
        <form>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" />
          <label>Nombre Dueño</label>
          <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" />
          <label>Fecha</label>
          <input type="date" name="fecha" class="u-full-width" />
          <label>hora</label>
          <input type="time" name="hora" class="u-full-width" />
          <label>Sintomas</label>
          <textarea name="sintomas" class="u-full-width"></textarea><button type="submit"
              class="u-full-width button-primary">Agregar Cita</button>
        </form>
          </div>
  );
};

export default Formulario;
*/