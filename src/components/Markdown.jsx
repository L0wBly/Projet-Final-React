import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";


export default function Markdown() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
  }
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }, [])


  return (
    <div className='w-full h-screen bg-gray-500'>
      {
        loading ?
        
        <div className='w-full h-full flex flex-col justify-center items-center gap-8'>
            <p className='text-8xl italic font-serif text-gray-300'>El Psy Kongroo</p>
            <BarLoader
            loading={loading}
            color="#D1D5DC"
            width={500} 
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>

      :
    <div>
      <p>Je suis la page du markdown</p>
      <form onSubmit={handleSubmit}>
        <p>Aller vers l&apos;accueil</p>
        <button type="submit">Go</button>
      </form>
    </div>
  }
    </div>
  )
};
