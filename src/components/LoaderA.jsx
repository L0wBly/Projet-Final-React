import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import player from '/assets/videos/player.mp4';
import '../style.css';
import Home from '../components/Home';

const LoaderA = ({ timer, onComplete }) => {  // Ajout du callback onComplete
    const [loadingA, setLoadingA] = useState(true);

    useEffect(() => {
        const timeoutDuration = timer || 6000;
        const timerId = setTimeout(() => {
            setLoadingA(false);
            if (onComplete) {
                onComplete();  // Appeler le callback lorsque le chargement est terminé
            }
        }, timeoutDuration);

        return () => clearTimeout(timerId); // Nettoyer le timeout
    }, [timer, onComplete]); // Ajout de onComplete comme dépendance

    if (loadingA) {
        return (
            <div className='relative w-full h-screen'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                <video 
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'>
                    <source src={player} />
                </video>
                <div className='absolute w-[100%] h-[100%] top-0 flex flex-col justify-center items-center text-amber-50'>
                    <h2 className='text-[70px]'> CHARGEMENT APR7S </h2>
                    <span className='text-[200px] animate-[rainbow_5s_infinite]'>L'EXPLOSION</span>
                    <img className='s' src='../assets/images/bomba.gif' />
                </div>
            </div>
        );
    }

    return <Home />; // Retourner la page d'accueil une fois le chargement terminé
};

LoaderA.propTypes = {
    timer: PropTypes.number.isRequired,
    onComplete: PropTypes.func,  // Ajouter PropTypes pour onComplete
};

export default LoaderA;
