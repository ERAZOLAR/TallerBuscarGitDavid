import React, { useState } from 'react';


const materias = [
    {
      id: 1,
      nombre: 'Matemáticas',
      descripcion: 'Aprenderás operaciones básicas, geometría y resolución de problemas.'
    },
    {
      id: 2,
      nombre: 'Lenguaje',
      descripcion: 'Desarrollarás habilidades de lectura, escritura y comprensión oral y escrita.'
    },
    {
      id: 3,
      nombre: 'Ciencias Naturales',
      descripcion: 'Explorarás el mundo natural, sus fenómenos y las leyes que lo rigen.'
    },
    {
      id: 4,
      nombre: 'Ciencias Sociales',
      descripcion: 'Conocerás la historia, la geografía y la organización social del mundo.'
    },
    {
      id: 5,
      nombre: 'Artística',
      descripcion: 'Desarrollarás tu creatividad a través de la música, la pintura, la danza y el teatro.'
    },
    {
      id: 6,
      nombre: 'Física',
      descripcion: 'Explorarás las leyes del universo, desde el movimiento hasta la energía y la relatividad.'
    },
    {
      id: 7,
      nombre: 'Química',
      descripcion: 'Descubrirás la composición de la materia, sus propiedades y cómo interactúa.'
    },
    {
      id: 8,
      nombre: 'Biología',
      descripcion: 'Conocerás los seres vivos, su funcionamiento y su relación con el medio ambiente.'
    },
    {
      id: 9,
      nombre: 'Anatomía',
      descripcion: 'Estudiarás la estructura del cuerpo humano, sus órganos y sistemas.'
    },
    {
      id: 10,
      nombre: 'Fisiología',
      descripcion: 'Aprenderás cómo funciona el cuerpo humano, sus procesos y mecanismos.'
    },
    {
      id: 11,
      nombre: 'Psicología',
      descripcion: 'Explorarás la mente humana, sus procesos y cómo influye en el comportamiento.'
    },
    {
      id: 12,
      nombre: 'Sociología',
      descripcion: 'Estudiarás la sociedad, sus estructuras, grupos e interacciones.'
    },
    {
      id: 13,
      nombre: 'Antropología',
      descripcion: 'Conocerás la evolución del ser humano, sus culturas y sociedades.'
    },
    {
      id: 14,
      nombre: 'Historia',
      descripcion: 'Aprenderás sobre el pasado de la humanidad, sus eventos y personajes.'
    },
    {
      id: 15,
      nombre: 'Geografía',
      descripcion: 'Explorarás el planeta Tierra, sus paisajes, países y culturas.'
    },
    {
      id: 16,
      nombre: 'Filosofía',
      descripcion: 'Reflexionarás sobre la existencia, el conocimiento y la realidad.'
    },
    {
      id: 17,
      nombre: 'Literatura',
      descripcion: 'Leerás y analizarás obras literarias de diferentes épocas y culturas.'
    },
    {
      id: 18,
      nombre: 'Arte',
      descripcion: 'Explorarás las diferentes manifestaciones artísticas, como la pintura, la música y la escultura.'
    },
    {
      id: 19,
      nombre: 'Música',
      descripcion: 'Aprenderás sobre teoría musical, composición e interpretación.'
    },
    {
      id: 20,
      nombre: 'Teatro',
      descripcion: 'Descubrirás el mundo del teatro, desde la actuación hasta la producción.'
    }
  ];





const  opciones = [
    { value: 0, text: "Mostrar 0 de 20 materias"},
  { value: 5, text: 'Mostrar 5 de 20 materias' },
  { value: 10, text: 'Mostrar 10 de 20 materias' },
  { value: 15, text: 'Mostrar 15 de 20 materias' },
  { value: 20, text: 'Mostrar 20 de 20 materias' },
];





const Select = () => {
  const [seleccion, setSeleccion] = useState('');
  const [materiasFiltradas, setMateriasFiltradas] = useState([]);

  const handleSeleccion = (e) => {
    const valor = parseInt(e.target.value);
    setSeleccion(valor);

    const nuevasMateriasFiltradas = materias.slice(0, valor);
    setMateriasFiltradas(nuevasMateriasFiltradas);
  };

  return (
    <div className="Select">
      <select value={seleccion} onChange={handleSeleccion}>
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.text}
          </option>
        ))}
      </select>

      {seleccion > 0 && (
        <div className="Resultado">
          <p >Se han seleccionado {seleccion} de 20 materias:</p>
          <thead>
            <tr className='TituloColumnasSelect'>
                <th>ID</th>
                <th className='ColumnasSelectNombre'>Nombre</th>
                <th className='ColumnasSelectDescripcion'>Descripción</th>
            </tr>
          </thead>
                   
          <ul>
          
            {materiasFiltradas.map((materia) => (
              <li key={materia.id}>
                {/*{`ID: ${materia.id} - Nombre: ${materia.nombre} - Descripción: ${materia.descripcion}`}*/}
                
                
                <table>        
                                        
                  
                  <tbody className='BodySelect'>
                    <td >{materia.id}</td>
                    <td className='NombreSelect'>{materia.nombre}</td>
                    <td className='DescripcionSelect'>{materia.descripcion}</td>
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default Select;