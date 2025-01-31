import { createElement, useState } from "react";

function Dialog() { 
  
    const [dialogOuverte, setDialogOuverte] = useState(false);
  
    function gererAffichage() {
      setDialogOuverte((prev) => (!prev));
    }
  
    // -- Render
    return (
      <div>
        <button onClick={gererAffichage}>Afficher dialog</button>
  
        <dialog id="dialog" open={dialogOuverte}>
          <header>
            <h2>Recette du jour</h2>
            <button onClick={gererAffichage}>X</button>
          </header>
          <hr />
          
        </dialog>
      </div>
    );
   }


  
export default Dialog;