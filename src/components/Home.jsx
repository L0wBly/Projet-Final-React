import { useNavigate } from "react-router-dom";
import Citation from "./Citation";
import Blague from "./Blague";
import Cocktail from "./Cocktail";
import Evenement from "./Evenement";
import Hours from "./Hours";
import Dialog from "./Dialog";
import ClickSpark from '../utils/Animations/ClickSpark/ClickSpark';
import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  function goto() {
    navigate('/markdown');
  }

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 4000);
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
    <main className="bg-red-500">
    <div>
      <ClickSpark />
        <h1 className="box-border size-32 border-4 p-">Projet final</h1>
        <Citation />
        <Blague />
        <Cocktail />
        <Evenement />
        <div id='heure'>
          <Hours />
        </div>
    </div>
      <Dialog />
      <button onClick={() => goto()}>Aller au Markdown</button>
    </main>
    }
    </div>
  )
};