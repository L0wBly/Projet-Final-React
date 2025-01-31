import { useNavigate } from "react-router-dom";


export default function Markdown() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
  }


  return (
    <div>
      <p>Je suis la page du markdown</p>
      <form onSubmit={handleSubmit}>
        <p>Aller vers l&apos;accueil</p>
        <button type="submit">Go</button>
      </form>
    </div>
  )
};
