import Cita from './Cita';
import './Listado.css';

const Listado = ({ citas, eliminarCita }) => {
  return (
    <div className={styles.listado}>
      <h2>ADMINISTRA TUS CITAS</h2>
      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} onEliminar={() => eliminarCita(index)} />
      ))}
    </div>
  );
};

export default Listado;
