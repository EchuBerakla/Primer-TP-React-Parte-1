import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ agregarCita }) => {
  const [form, setForm] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(form);
    setForm({ mascota: '', dueño: '', fecha: '', hora: '', sintomas: '' });
  };

  return (
    <div className={styles.formulario}>
      <h2>CREAR MI CITA</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          value={form.mascota}
          onChange={handleChange}
          required
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="duenio"
          placeholder="Nombre dueño de la mascota"
          value={form.duenio}
          onChange={handleChange}
          required
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />

        <label>hora</label>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          required
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          value={form.sintomas}
          onChange={handleChange}
          required
        />

        <button type="submit">AGREGAR CITA</button>
      </form>
    </div>
  );
};

export default Formulario;
