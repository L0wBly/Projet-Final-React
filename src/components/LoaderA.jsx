import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import player from '/assets/videos/player.mp4';
import '../style.css';

const LoaderA = ({ timer, onComplete }) => {  // Ajout du callback onComplete
    const [loadingA, setLoadingA] = useState(true);

    useEffect(() => {
        const timeoutDuration = timer || 6000;
        const timerId = setTimeout(() => {
            setLoadingA(true);
            setTimeout(() => {
                setLoadingA(false)
            }, timeoutDuration);
        }, []);

        return () => clearTimeout(timerId); // Nettoyer le timeout
    }, [timer, onComplete]); // Ajout de onComplete comme dépendance

        return (
            <div className={`w-full h-screen fixed z-50 ${!loadingA && "-translate-y-[100%] duration-800"}`}>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                <video 
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'>
                    <source src={player} />
                </video>
                <div className='absolute w-[100%] h-[100%] top-0 flex flex-col justify-center items-center text-amber-50'>
                    <h2 className='text-[70px]'> CHARGEMENT APRÈS </h2>
                    <span className='text-[200px] animate-[rainbow_5s_infinite]'>L'EXPLOSION</span>
                    <img className='s' src='../assets/images/bomba.gif' />
                </div>
            </div>
        );
    }

LoaderA.propTypes = {
    timer: PropTypes.number.isRequired,
    onComplete: PropTypes.func,  // Ajouter PropTypes pour onComplete
};

export default LoaderA;
