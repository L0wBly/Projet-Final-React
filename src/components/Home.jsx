import { useNavigate } from "react-router-dom";
import Citation from "./Citation";
import Blague from "./Blague";
import Cocktail from "./Cocktail";
import Evenement from "./Evenement";
import Hours from "./Hours";
import Dialog from "./Dialog";

export default function Home() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(e.target.url.value);
  }


  return (
    <main>
      <h1 className="box-border size-32 border-4 p-">Projet final</h1>
      <Citation />
      <Blague />
      <Cocktail />
      <Evenement />
      <div id='heure'>
        <Hours />
        <Dialog />
      </div>
      <div>
      <p>Je suis la page d&apos;accueil</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="Aller vers..." />
        <button type="submit">Go</button>
      </form>
    </div>
    </main>
  )
};