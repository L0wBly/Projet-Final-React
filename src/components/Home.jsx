import { useNavigate } from "react-router-dom";
import Citation from "./Citation";
import Blague from "./Blague";
import Cocktail from "./Cocktail";
import Evenement from "./Evenement";
import Hours from "./Hours";
import Dialog from "./Dialog";
import ClickSpark from '../utils/Animations/ClickSpark/ClickSpark';

export default function Home() {
  const navigate = useNavigate();
  function goto() {
    navigate('/markdown');
  }


  return (
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
  )
};