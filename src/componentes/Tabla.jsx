import React from 'react';

const Tabla = ({ materias }) => {
    return (
      <div>
          <h6 className='TituloTabla'>" TABLA  DE INFORMACION CON MATERIAS ENCONTRADAS " </h6>
        <table>
          <thead>
            <tr className='TituloColumnasTabla'>
              
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia) => (
              <tr key={materia.id}>
                <td>{materia.id}</td>
                <td>{materia.nombre}</td>
                <td>{materia.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


export default Tabla;
