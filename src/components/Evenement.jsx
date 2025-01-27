import { useEffect, useState } from 'react'

export default function Evenement() {

    const [evenement, setEvenement] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const aleatoire2 = (min, max) => {
        return Math.random() * (max - min) + min
      }
      const aleatoire = aleatoire2(1, 57)

    async function fetchEvenement() {
        setLoading(true)
        try {
            const url = "https://history.muffinlabs.com/date"

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("pas d'évenement trouvé")
            }
            const data = await response.json()
            setEvenement(data)
        } catch (error) {
            setError(error)
            setLoading(false)
            return
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchEvenement()
    }, [])

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {evenement && (
            <div>
                <h2>Évenement historique du jour</h2>
                <p>{`${evenement.date} ${evenement.data.Events[parseInt(aleatoire)].year}`}</p>
                <p>{evenement.data.Events[parseInt(aleatoire)].text}</p>
            </div>
        )}
    </div>
  )
}