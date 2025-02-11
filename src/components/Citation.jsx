import { useEffect, useState } from 'react'

export default function Citation() {

    const [citation, setCitation] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchCitation() {
        setLoading(true)
        try {
            const url = "https://api.adviceslip.com/advice"

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("pas de citation trouvé")
            }
            const data = await response.json()
            setCitation(data)
        } catch (error) {
            setError(error)
            return
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCitation()
    }, [])

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {citation && (
            <div>
                <h2 className='mb-4 text-gray-400'>
                    Et voilà , la citation du jour :
                </h2>
                <p className='font-[fontCitation] text-amber-400'>
                    {citation.slip.advice}
                </p>
            </div>
        )}
    </div>
  )
}