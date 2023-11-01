// components/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la fecha y hora cada segundo
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    // Actualizar cada segundo
    const intervalId = setInterval(updateDateTime, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // Obtener la fecha y hora en formato local de Argentina
  const options = {
    timeZone: 'America/Argentina/Buenos_Aires',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedDateTime = currentDateTime.toLocaleString('es-AR', options);

  return (
    <div className='clock'>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default Clock;
