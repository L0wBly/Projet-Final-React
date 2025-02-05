import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Markdown from "./components/Markdown";
import Home from "./components/Home";
import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setLoading] = useState(false);

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Markdown' element={<Markdown />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
      }
    </div>
  );
}

export default App;