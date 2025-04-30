import './Cita.css';

const Cita = ({ nombre, propietario, fecha, hora, sintomas, eliminarCita, index }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{nombre}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(index)}
      >
        Eliminar ×
      </button>
    </div>
  );
};

export default Cita;
