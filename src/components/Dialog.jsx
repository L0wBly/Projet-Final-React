import { createElement, useState } from "react";

function Dialog() { 
  
    const [dialogOuverte, setDialogOuverte] = useState(false);
  
    function gererAffichage() {
      setDialogOuverte((prev) => (!prev));
    }
  
    // -- Render
    return (
      <div className="w-full ">
        <button onClick={gererAffichage} className="border-2 border-solid pr-4 pl-4 pt-1 pb-1 rounded-[20px] hover:bg-blue-500" >Afficher dialog</button>
  
        <dialog id="dialog" open={dialogOuverte} className="w-full bg-transparent" >
          <header className="w-1/6 flex flex-col items-center justify-center bg-violet-500">
            <h2>Recette du jour</h2>
            <button onClick={gererAffichage}>X</button>
          </header>
          
          
        </dialog>
      </div>
    );
   }


  
export default Dialog;