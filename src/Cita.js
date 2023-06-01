import React from 'react'

export default function Cita({cita}) {
const {id,nombre} = cita;

  return (
    <div className="cita">
        <p>Mascota: <span>e.</span></p>
        <p>Dueño: <span>Martin</span></p>
        <p>Fecha: <span>2021-08-05</span></p>
        <p>Hora: <span>08:20</span></p>
        <p>Sintomas: <span>Le duele la pierna</span></p>
        <button className="button elimnar u-full-width">Eliminar ×</button>
    </div>
  )
}
