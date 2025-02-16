
import React, { useState, useEffect } from 'react';
import '../style.css';
import PropTypes from 'prop-types';
function Hours({timerhours}) {
    const [time, setTime] = useState(new Date());
    const [hours, setHours] = useState(false);
  
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

      useEffect(() => {
        const timer1 = setTimeout(() => {
          setHours(true);
        }, timerhours);
        
        return () => {
          clearTimeout(timer1);
        };
      }, []);
  
    return (
        <div className='heure'>
          <p className=''>Il est actuellement : </p>
          <br />
          <p className='size-[30px] animate-[rainbow_5s_infinite]'>{date1} {formattedTime}</p>
          
        </div>
    );
  }

Hours.propTypes = {
    timer: PropTypes.string.isRequired,
  };
  
export default Hours;

