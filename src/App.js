// src/App.js
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Clock from './components/Clock';
import FortuneCookie from './components/FortuneCookie';
import './App.css';

const App = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      const { content } = data;
      Swal.fire({
        title: formattedDateTime,
        html: content,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        showCloseButton: true,
      })

    } catch (error) {
      console.error('Error fetching fortune:', error);
    }
  };

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
    <div className='app'>
      <h1>Fortune Cookie</h1>
      <FortuneCookie onClick={handleClick} />
    </div>
  );
};

export default App;
