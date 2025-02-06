import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function Markdown() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <main className="w-full h-screen bg-gray-500">
      <Loader timer={1000} />
      <p>Je suis la page du markdown</p>
      <form onSubmit={handleSubmit}>
        <p>Aller vers l&apos;accueil</p>
        <button type="submit">Go</button>
      </form>
    </main>
  )
};
