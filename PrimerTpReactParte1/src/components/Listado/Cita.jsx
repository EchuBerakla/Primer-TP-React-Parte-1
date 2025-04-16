import './Cita.css'

const Cita = ({ cita, onEliminar }) => {
  return (
    <div className={styles.cita}>
      <p><strong>Mascota:</strong> {cita.mascota}</p>
      <p><strong>Dueño:</strong> {cita.duenio}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Síntomas:</strong> {cita.sintomas}</p>
      <button onClick={onEliminar}>ELIMINAR ×</button>
    </div>
  );
};

export default Cita;
