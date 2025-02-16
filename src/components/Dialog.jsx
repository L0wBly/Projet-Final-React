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
            
            <dialog id="dialog" open={dialogOuverte} className="bg-transparent relative top-[-50%] translate-y-[-20%] left-[-50%] translate-x-[-50%] z-10 rounded-[20px]">
              <header className="flex flex-col items-center justify-center p-5 bg-rose-700">
                <h2 className="text-[2rem]">Recette du jour</h2>
                <p className="pr-3 pl-3 pt-3 pb-3 text-[1.4rem]">{recette.meals[0].strMeal}</p>
                <p className="pr-5 pl-5">{recette.meals[0].strInstructions}</p>
                <p className="pr-5 pl-5 pt-3 pb-3">{`${recette.meals[0].strIngredient1} ${recette.meals[0].strMeasure1} ${recette.meals[0].strIngredient2} ${recette.meals[0].strMeasure2} ${recette.meals[0].strIngredient3} ${recette.meals[0].strMeasure3} ${recette.meals[0].strIngredient4} ${recette.meals[0].strMeasure4} ${recette.meals[0].strIngredient5} ${recette.meals[0].strMeasure5} ${recette.meals[0].strIngredient6} ${recette.meals[0].strMeasure6} ${recette.meals[0].strIngredient7} ${recette.meals[0].strMeasure7} ${recette.meals[0].strIngredient8} ${recette.meals[0].strMeasure8} ${recette.meals[0].strIngredient9} ${recette.meals[0].strMeasure9} ${recette.meals[0].strIngredient10} ${recette.meals[0].strMeasure10} ${recette.meals[0].strIngredient11} ${recette.meals[0].strMeasure11} ${recette.meals[0].strIngredient12} ${recette.meals[0].strMeasure12} ${recette.meals[0].strIngredient13} ${recette.meals[0].strMeasure13} ${recette.meals[0].strIngredient14} ${recette.meals[0].strMeasure14} ${recette.meals[0].strIngredient15} ${recette.meals[0].strMeasure15} ${recette.meals[0].strIngredient16} ${recette.meals[0].strMeasure16} ${recette.meals[0].strIngredient17} ${recette.meals[0].strMeasure17} ${recette.meals[0].strIngredient18} ${recette.meals[0].strMeasure18} ${recette.meals[0].strIngredient19} ${recette.meals[0].strMeasure19} ${recette.meals[0].strIngredient20} ${recette.meals[0].strMeasure20}.`}</p>{ /* Il faudrait rejouter une fonction qui séléctionne seulement les éléments contenant des informations */}
                <img src={recette.meals[0].strMealThumb} alt="Photo recette" className="pr-5 pl-5 pt-5 w-[500px]"/>
                <button onClick={gererAffichage} className="pr-5 pl-5 pt-3 pb-3 mt-2 text-[1.5rem] border-2 border-solid rounded-[20px] hover:bg-pink-500">Quit</button>
              </header>
            </dialog>
          </div>
          )}
      </div>
    );
   }


  
export default Dialog;
