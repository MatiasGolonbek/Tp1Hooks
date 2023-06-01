import { useState } from 'react';
import './App.css';
import Listado from './Listado';
import Formulario from './Formulario';
import TituloCita from './TituloCita';

function App() {
  const array = [
    {
      id:1,nombre:'aaa'
    },
    {
      id:2,nombre:'fhgdfh'
    },
    {
      id:3,nombre:'gjffk'
    }
  ];

  const [lista,setLista] = useState(array);

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <TituloCita />
            <Formulario setLista={setLista} lista={lista} />          
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
           <Listado lista={lista} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
