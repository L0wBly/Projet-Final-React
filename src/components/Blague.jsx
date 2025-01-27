import { useEffect, useState } from 'react'

export default function Blague() {

    const [blague, setBlague] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const chute = document.querySelector('#chute');
    if (document.querySelector('#monbouton').addEventListener('click', function() {
        chute.classList.remove("hide")}));

    async function fetchBlague() {
        setLoading(true)
        try {
            const url = "https://official-joke-api.appspot.com/random_joke"

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("pas de blague trouvé")
            }
            const data = await response.json()
            setBlague(data)
        } catch (error) {
            setError(error)
            setLoading(false)
            return
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlague()
    }, [])

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {blague && (
            <div>
                <h2>Blague du jour</h2>
                <p>{blague.setup}</p>
                <button id="monbouton">Réveler la chute</button>
                <p id='chute' className='hide'></p>
            </div>
        )}
    </div>
  )
}