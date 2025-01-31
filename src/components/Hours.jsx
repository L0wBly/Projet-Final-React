import React, { useState, useEffect } from 'react';
import "../../asset/style.css"
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
  
    return (
        <div className='heure'>
          <p>{formattedTime}</p>
        </div>
    );
  }
  
  export default Hours;