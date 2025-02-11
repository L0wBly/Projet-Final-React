import { useEffect, useState } from 'react'

export default function Blague() {

    const [blague, setBlague] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [hide, setHide] = useState(false)

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
            return
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlague()
    }, [])
    function reveal() {
        setHide(true)
    }

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {blague && (
            <div>
                <h2>
                    Blague du jour :
                </h2>
                <br />
                <p>
                    {blague.setup}
                </p>
                {hide && 
                    <p>
                        {blague.punchline}
                    </p>
                }
                {!hide &&
                <button onClick={() => (reveal())}>
                    Réveler la chute
                </button>
                }
            </div>
        )}
    </div>
  )
}