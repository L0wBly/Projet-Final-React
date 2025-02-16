import { useNavigate } from "react-router-dom";
import LoaderA from './LoaderA'; 
import { useState } from 'react'; 
import Citation from "./Citation";
import Blague from "./Blague";
import Cocktail from "./Cocktail";
import Evenement from "./Evenement";
import Hours from "./Hours";
import Dialog from "./Dialog";
import ClickSpark from '../utils/Animations/ClickSpark/ClickSpark';
import '../style.css';

export default function Home() {
  const navigate = useNavigate();
  const [isLoaderCompleted, setIsLoaderCompleted] = useState(false);
  const [rotateDeg, setRotateDeg] = useState("-200deg");
  function goto() {
    navigate('/markdown');
  }

  const handleLoaderComplete = () => {
    setIsLoaderCompleted(true); 
  };

  const handleClick = () => {
    setRotateDeg((prevRotateDeg) => prevRotateDeg === "-200deg" ? "-2deg" : "-200deg");
  };

  const [showMocktail, setShowMocktail] = useState(false);
  const [showGif, setShowGif] = useState(false);


  const MocktailClick = () => {

    setShowGif(true);
    setShowMocktail(false);

    setTimeout(() => {
      setShowGif(false);
      setShowMocktail(true);
      
    }, 3000);
  };




  return (
    <main className="relative w-full h-screen">
  {!isLoaderCompleted && <LoaderA timer={4000} onComplete={handleLoaderComplete} />}
  {isLoaderCompleted && <div></div>}

  <div className="flex flex-col items-center">
    <div className="relative w-full h-screen">


      {/* Accueil : LOGO + ?? */}

      <div className="w-[1200px] h-[600px] bg-cyan-500 rounded-lg absolute top-0 right-0 flex justify-center items-center">
        <div className="w-[1190px] h-[590px] bg-amber-200 flex justify-center items-center relative">
          <img className="top-[20px] absolute" src="../assets/images/ani_line_star2_rainbow.gif" alt="banderol" />
          <img className="absolute top-[50px] w-[585px]" src="../assets/images/LOGO.png" />
          <p className="">
            Bienvenue au Markdawn Palace !
           <Hours />
          </p>
        </div>
      </div>


      {/* Fichiers Markdown */}

      <div className="w-[600px] h-[600px] bg-[rgba(0,0,0,0.7)] absolute top-[-20px] left-[20px] z-[1000] flex justify-center items-center rounded-[50px] mt-[65px]">
      <div className="w-[500px] h-[500px] bg-[#d8b801] flex justify-center items-center relative">
        <img className="w-[100px] h-[100px] absolute z-[2] top-[-60px] left-[-45px]" src="../assets/images/book2.gif" />
        <img className="w-[100px] h-[100px] absolute z-[2] top-[-60px] right-[-45px]" src="../assets/images/book2.gif" />
        <img className="w-[100px] h-[100px] absolute z-[2] bottom-[-30px] left-[-45px]" src="../assets/images/book2.gif" />
        <img className="w-[100px] h-[100px] absolute z-[2] bottom-[-30px] right-[-45px]" src="../assets/images/book2.gif" />
        <div className="w-[480px] h-[480px] bg-emerald-800 relative z-[1]"> <p className="text-center text-[50px]"> MARKDAWN FILES</p>    </div>
      </div>
      </div>

      {/* BLAGUE */}

      <div className="relative">
      <div className="w-[800px] h-[550px] bg-black border-t-[10px] border-r-[170px] border-b-[10px] border-l-[20px] border-gray-900 flex justify-center items-center absolute right-[1400px] top-[725px] left-[5px] animate-[rainbow-border_5s_infinite] rounded-xl">
      <p className="absolute right-[-350px] top-[42%] transform rotate-[270deg] text-zinc-950 text-[60px]"> CLICK RIGHT THERE </p>
        <div className="w-[800px] h-[950px] border-4 border-solid border-transparent flex justify-center items-center rounded-[95%_4%_92%_5%_/_4%_95%_6%_95%] transform rotate-[2deg]">
          <div className="w-[100%] h-[100%] border-4 border-transparent flex justify-center items-center transform p-[15px] cursor-pointer"
                  style={{ transform: `rotate(${rotateDeg})` }}
                  onClick={handleClick}>
            <p className="text-white mt-4 text-sm overflow-hidden text-ellipsis"> 
              <Blague />
            </p>
          </div>
        </div>
      </div>
    </div>


      {/* Easter Egg ? Clic */}

      <div>
        <img className= "w-[300px] h-[400px] absolute bottom-[250px] left-[350px] transform rotate-[65deg]" src="../assets/images/GoogleCard.png" alt="Carte Google Play" />
      </div>  

      {/* Citation */}

      
  <div className="absolute top-[900px] right-[-100px] transform translate-x-[-50%] translate-y-[-50%] bg-fuchsia-800 max-w-[600px] w-full p-2 border-2 border-[#db0f31]">
    <div className="relative border-2 border-[#db0f31] p-10 flex items-center justify-between">
    
    
      <p className="text-[20px] text-center font-medium text-white max-w-[calc(100%-160px)] overflow-hidden text-ellipsis">
      "<Citation />"
      </p>

    
      <div className="flex justify-center items-center w-[150px] h-[150px] bg-[#db0f31]">
      <img className="w-full h-full object-cover" src="../assets/images/Speecher.jpg" alt="Orateur" />
      </div>

    </div>

  
    <div className="absolute left-0 top-0 bottom-0 flex items-center justify-start w-4 h-4 text-center text-[#db0f31] border-2 border-[#db0f31]">•</div>
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end w-4 h-4 text-center text-[#db0f31] border-2 border-[#db0f31]">•</div>

  
    <div className="absolute left-5 top-5 text-[#db0f31] text-[14px] border-2 border-[#db0f31] rounded-full w-[14px] h-[14px] flex items-center justify-center">•</div>
    <div className="absolute right-5 top-5 text-[#db0f31] text-[14px] border-2 border-[#db0f31] rounded-full w-[14px] h-[14px] flex items-center justify-center">•</div>
  </div>


{/* Cocktail */}

<div className="absolute left-[30px] top-[1350px] bg-[#d8b801] w-[900px] h-[700px] flex justify-center items-center">
  <div className="relative w-[100%] h-[100%] flex justify-center items-center">
    {!showGif && !showMocktail && (
      <img
        className="" 
        src="../assets/images/mocktail.jpg"
        alt="Mocktail Vide"
        onClick={MocktailClick}
      />
    )}
    {showGif && (
      <div className="absolute">
        <img
          className=""
          src="../assets/images/shake.gif"
          alt="Shake"
        />
      </div>
    )}
    {showMocktail && (
      <div className="absolute flex justify-center items-center">
      <p className="text-center text-[24px] font-bold max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
        <Cocktail />
        </p>
      </div>
    )}
  </div>
</div>

  
  <img className="absolute left-[850px] top-[800px]" src="../assets/images/canette.gif" alt="Canette"/>
      

  {/* Evenement */}

  <div className="absolute top-[1200px] right-[-100px] transform translate-x-[-50%] translate-y-[-50%] bg-orange-950 max-w-[600px] w-full p-2 border-2 border-[#d3800c]">
    <div className="relative border-2 border-[#d3800c] p-10 flex items-center justify-between">
    
    
      <p className="text-[20px] text-center font-medium text-white max-w-[calc(100%-160px)] overflow-hidden text-ellipsis">
      "<Evenement />"
      </p>

    
      <div className="flex justify-center items-center w-[150px] h-[190px] bg-[#d8b801]">
      <img className="w-full h-full object-cover" src="../assets/images/trumpet.png" alt="Trumpet" />
      </div>
    </div>

  
    <div className="absolute left-0 top-0 bottom-0 flex items-center justify-start w-4 h-4 text-center text-[#d3800c] border-2 border-[#d3800c]">•</div>
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end w-4 h-4 text-center text-[#d3800c] border-2 border-[#d3800c]">•</div>

  
    <div className="absolute left-5 top-65 text-[#d3800c] text-[14px] border-2 border-[#d3800c] rounded-full w-[14px] h-[14px] flex items-center justify-center">•</div>
    <div className="absolute right-5 top-65 text-[#d3800c] text-[14px] border-2 border-[#d3800c] rounded-full w-[14px] h-[14px] flex items-center justify-center">•</div>
  </div>


   {/* SEGA */}

    <div className="absolute top-[1400px] w-[900px] h-[500px] right-[50px] bg-[#834242ad]">
    <img className="s" src="../assets/images/saturn.jpg" alt="Sega Saturn" />
    <img className="absolute w-[400px] h-[460px] right-[0px] top-[0px]" src="../assets/images/virtua.jpg" alt="Virtua Fighter Jacket" />
    <p className="font-[fontSell] leading-[5] text-neutral-50"> 
    239 €
    <br />
    Entièrement presque parfaitement neuve
    <br />
    Pour 20 € de + : VIRTUA FIGHTER 2 !
    </p>
  </div>


    {/* RECETTE */}

    <div className="absolute top-[2300px]">
      <Dialog />
    </div>


    </div>
  </div>
</main>

  );
}
