import { useState } from "react";

function Dialog() {
    // -- states
    const [dialogOuverte, setDialogOuverte] = useState(false);
  
    // -- Events
    function gererAffichage() {
      setDialogOuverte((prev) => (!prev));
    }
  
    // -- Render
    return (
      <div>
        <button onClick={gererAffichage}>Afficher dialog</button>
  
        <dialog open={dialogOuverte}>
          <header>
            <h2>Recette du jour</h2>
            <button onClick={gererAffichage}>X</button>
          </header>
          <hr />
          <img src="https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg" alt="Super alt" style={{ width: '300px' }} />
        </dialog>
      </div>
    );
  }
  
  export default Dialog;