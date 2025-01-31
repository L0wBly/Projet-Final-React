import Citation from "./components/Citation";
import Blague from "./components/Blague";
import Cocktail from "./components/Cocktail";
import Evenement from "./components/Evenement";
import Hours from "./components/Hours";
import Dialog from "./components/Dialog";
import './assets/style.css';
function App() {
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
    </main>
  );
}

export default App;