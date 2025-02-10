import {  useState, useEffect } from "react";

function Dialog() { 
  
    const [dialogOuverte, setDialogOuverte] = useState(false);
    const [recette, setRecette] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchCuisine() {
      setLoading(true)
      try {
          const url = "https://www.themealdb.com/api/json/v1/1/random.php"

          const response = await fetch(url)
          if (!response.ok) {
              throw new Error("Pas de recette trouvé")
          }
          const data = await response.json()
          setRecette(data)
      } catch (error) {
          setError(error)
          return
      } finally {
          setLoading(false)
      }
  }
  
    function gererAffichage() {
      setDialogOuverte((prev) => (!prev));
    }

    useEffect(() => {
      fetchCuisine()
    }, [])
  
    return (

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {recette && (
          <div>
            <button onClick={gererAffichage} className="border-2 border-solid pr-4 pl-4 pt-1 pb-1 rounded-[20px] hover:bg-blue-500" >Afficher dialog</button>
            
            <dialog id="dialog" open={dialogOuverte} className=" bg-transparent absolute top-[15%] left-[35%] right-[35%] rounded-[20px]">
              <header className="size-fit flex flex-col items-center justify-center pr-5 pl-5 pt-5 pb-5 bg-violet-500">
                <h2 className="text-[2rem]">Recette du jour</h2>
                <p className="pr-3 pl-3 pt-3 pb-3 text-[1.4rem]">{recette.meals[0].strMeal}</p>
                <p className="pr-5 pl-5">{recette.meals[0].strInstructions}</p>
                <img src={recette.meals[0].strMealThumb} alt="Photo recette" className="pr-5 pl-5 pt-5 w-[500px]"/>
                <button onClick={gererAffichage} className="pr-5 pl-5 pt-5 text-[1.5rem]">X</button>
              </header>
            </dialog>
          </div>
          )}
      </div>
    );
   }


  
export default Dialog;
