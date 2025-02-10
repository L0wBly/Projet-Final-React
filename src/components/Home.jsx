import { useNavigate } from "react-router-dom";
import Citation from "./Citation";
import Blague from "./Blague";
import Cocktail from "./Cocktail";
import Evenement from "./Evenement";
import Hours from "./Hours";
import Dialog from "./Dialog";
import ClickSpark from '../utils/Animations/ClickSpark/ClickSpark';
import Loader from "./Loader";

export default function Home() {
  const navigate = useNavigate();
  function goto() {
    navigate('/markdown');
  }

  return (
    <main className="bg-red-500 h-[150vh]">
    <Loader timer={4000} />
    <div>
      <ClickSpark />
        <h1 className="box-border size-32 border-4 p-">Projet final</h1>
        <Citation />
        <Blague />
        <Cocktail />
        <Evenement />
    </div>
      <Dialog />
      <div id='heure' className='flex flex-col items-end fixed bottom-[0] w-full'>
          <Hours timerhours={4000} />
      </div>
      <button onClick={() => goto()}>Aller au Markdown</button>
    </main>
  )
};