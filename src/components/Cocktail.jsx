import { useEffect, useState } from 'react'
import aleatoire2 from '../utils/random'

export default function Cocktail() {

    const [cocktail, setCocktail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const aleatoire = aleatoire2(1, 57)

    async function fetchCocktail() {
        setLoading(true)
        try {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("pas de cocktail trouvé")
            }
            const data = await response.json()
            setCocktail(data)
        } catch (error) {
            setError(error)
            return
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCocktail()
    }, [])

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {cocktail && (
            <div>
                <h2>
                    Mocktail du jour
                </h2>
                <p>
                    {cocktail.drinks[parseInt(aleatoire)].strDrink}
                </p>
                <img src={`${cocktail.drinks[parseInt(aleatoire)].strDrinkThumb}`} alt="photo du mocktail" />
            </div>
        )}
    </div>
  )
}