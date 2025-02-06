import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

export default function Loader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 4000);
      }, [])

    return (
        <div className={`w-full h-screen bg-gray-500 fixed top-[0] left-[0] ${!loading && "-translate-y-[100%] duration-800"}`}>
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
        </div>
    )
};