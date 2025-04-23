import './Listado.css';
import Cita from './Cita';

const Listado = () => {
  return (
    <div class="one-half column">
      <h2>Administra tus citas</h2>
        <Cita
          nombre="Nina"
          propietario="Martin"
          fecha="2021-08-05"
          hora="08:20"
          sintomas="Le duele la pierna"
        />
        <Cita
          nombre="Sifon"
          propietario="Flecha"
          fecha="2023-08-05"
          hora="09:24"
          sintomas="Duerme mucho"
        />
        <Cita
          nombre="Floki"
          propietario="Ari"
          fecha="2023-08-05"
          hora="16:15"
          sintomas="No está comiendo"
        />
    </div>
  );
};

export default Listado;

