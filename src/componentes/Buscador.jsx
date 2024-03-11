import React, { useState } from 'react';

const Buscador = ({ onFiltrar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    onFiltrar(valor);
  };

  return (
    <div>
      <input
        type="text"
        placeholder=" .. Buscar por NOMBRE ¡!"
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );
};

export default Buscador;
