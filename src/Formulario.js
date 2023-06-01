import React, { useState } from 'react';

export default function Formulario({setLista,lista}) {
    const [datos,setDatos] = useState({
        mascota:'',
        propietario:'',
         fecha: null,
         hora: null,
         sintomas: ''
    })

    const [error,setError] = useState(false);

    const {mascota, propietario, fecha, hora, sintomas} = datos;

    const Crear = (e) =>{
        e.preventDefault();

        if(mascota == '' || propietario == '' || fecha == null || hora == null || sintomas == '' ) {
            setError(true);
            return;
        }

        setError(false);

        //creo objeto nuevo

        //lo agrego al new array

        setLista([...lista,datos])
    }

    const onChange = (e)=>{
        setDatos({...datos, [e.target.name]: e.target.value});        
    }

    return (
        <>
        {error && <div className='alerta-error'>Error</div>}
        <form onSubmit={Crear}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={onChange} />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={onChange} />
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={onChange} />
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" value={hora} onChange={onChange} />
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={onChange}></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
        </>
    )
}
