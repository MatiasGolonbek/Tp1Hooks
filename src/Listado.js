import Cita from './Cita';


export default function Listado({lista}) {
  return (
    <>
    {lista.map(cita=>(
      <Cita key={cita.id} cita={cita} />
    ))}    
    </>    
  )
}
