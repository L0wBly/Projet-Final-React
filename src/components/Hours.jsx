import React, { useState, useEffect } from 'react';
function Hours() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formattedTime = time.toLocaleString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });

      let date1 = new Date().toLocaleDateString();

      document.getElementById('p1').innerHTML = date1;
  
    return (
        <div className='heure'>
          <h1>La date du jour</h1>
          <p id='p1'></p>
          <p>{formattedTime}</p>
        </div>
    );
  }
  
  export default Hours;