import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import player from './assets/player.mp4';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 6000);

 
    return () => clearTimeout(timer);
  }, []); 

//  CHARGEMENT DE LA PAGE

  if (loading) {
    return (
      <div className="main">
        <div className="overlay"></div>
        <video src={player} autoPlay loop muted />
        <div className="content">
          <h2>CHARGEMENT DE LA PAGE APRES</h2>
          <span className='rainbow-text'>L'EXPLOSION</span>
        </div>
      </div>
    );
  }

//  CONTENU PAGE D'ACCUEIL APRES LOADING SCREEN

  return (
    <div className='main-container'>
      
      {/* Welcome Box */}

      <div className="st">
        <div className="st2">
          <img className="banderol" src="/images/ani_line_star2_rainbow.gif" alt="banderol" />
          <img className="logo" src="/images/LOGO.png" alt="logo" />
        </div>
      </div>

      


      {/* Markdawn BOX */}
      
      <div className="outer-square">
        <div className="inner-square">
          <img className="corner-image top-left" src="/images/book2.gif" alt="Image 1" />
          <img className="corner-image top-right" src="/images/book2.gif" alt="Image 2" />
          <img className="corner-image bottom-left" src="/images/book2.gif" alt="Image 3" />
          <img className="corner-image bottom-right" src="/images/book2.gif" alt="Image 4" />
          
          <div className="square">
            <p className="MARKDAWN">MARKDAWN PLACE</p>
          </div>
        </div>
      </div>
    
      {/* Rainbow Box */}

      <div className="box box1">
        <div className="oddboxinner"> BIM BOOM </div>
      </div>
      
      {/* CARTE GOOGLE PLAY */}

      <div className='card'>
        <img className='googleCard' src='/images/GoogleCard.png' alt='Carte Google Play'></img>
      </div>

      {/* Citation */}

      <div className='boxCitation'>
        <div className='boxSpeach'>
          <p className='citation'>"Love in its essence is spiritual fire."</p>
          <div className='Avatar'><img className='Speaker' src='/images/Speecher.jpg' alt="Orateur" /></div>
        </div>
      </div>
      

               {/* Barre de navigation */}


      <div className="navbar">
      <a className="link-wrapper" href="#">
        <span className="fallback">Index</span>

        <div className="shape-wrapper">
          <div className="shape red-fill jelly">
            <svg x="0px" y="0px" viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
              <polygon fill="#FF0000" points="29.5,8.5 150.7,0 108.1,32.7 3.1,47 " />
            </svg>
          </div>
          <div className="shape cyan-fill jelly">
            <svg x="0px" y="0px" viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
              <polygon fill="#00FFFF" points="0.3,17 125.1,0 68.8,45.6 24.3,39 " />
            </svg>
          </div>
        </div>
      </a>

      
      <a className="link-wrapper" href="#">
        <span className="fallback">Haaaaaa</span>
        <div className="img-wrapper">
          <img className="normal" src="/images/HOME1.png" alt="Home" />
          <img className="active" src="/images/HOME2.png" alt="Active Home" />
        </div>
        <div className="shape-wrapper">
          <div className="shape red-fill jelly">
            <svg x="0px" y="0px" viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
              <polygon fill="#FF0000" points="0,7.1 127.3,0 32.3,64 4.8,58.2" />
            </svg>
          </div>
          <div className="shape cyan-fill jelly">
            <svg x="0px" y="0px" viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
              <polygon fill="#00FFFF" points="14,0.5 127.4,0 77.4,164 2.3,61.1 " />
            </svg>
          </div>
        </div>
      </a>

      
      <a className="link-wrapper" href="#">
        <span className="fallback">MARKDO</span>
        <div className="img-wrapper">
          <img className="normal" src="/images/MARKDOWN1.png" alt="Markdown" />
          <img className="active" src="/images/MARKDOWN2.png" alt="Active Markdown" />
        </div>
        <div className="shape-wrapper">
          <div className="shape red-fill jelly">
            <svg x="0px" y="0px" viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
              <polygon fill="#FF0000" points="15.5,0 70.7,0 118.1,32.7 43.1,47 " />
            </svg>
          </div>
          <div className="shape cyan-fill jelly">
            <svg x="0px" y="0px" viewBox="0 0 108.1 47" enableBackground="new 0 0 108.1 47">
              <polygon fill="#00FFFF" points="17.3,0 105.1,0 68.8,45.6 24.3,39 " />
            </svg>
          </div>
        </div>
      </a>


    </div>
      
    </div>
  );
};

export default Main;
