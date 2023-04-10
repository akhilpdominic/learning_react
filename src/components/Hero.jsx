import React from "react";
import Typed from 'react-typed'
import mouse_scroll from '../assets/scrolldown.png'


const Hero =() =>
{
    return (
        <div className="text-white">
        
        <div className="max-w-[800px] mt-[70px] w-full h-screen mx-auto text-center flex flex-col content-center">
        <p className="text-[#00df9a] font-bold p-2">Hello There... </p>

        <p className="text-[#00df9a] font-bold p-2 text-4xl">I am Akhil </p>

        <div className="flex justify-center">
        <p className="text-[#00df9a] font-bold p-2 text-4xl">I am a  </p>
        <Typed 
        className='text-[#00df9a] font-bold p-2 text-4xl pl-2'
        strings={["developer","fitness enthusiast","guitarist"]}
        typeSpeed={40} backSpeed={130} 
        loop/>
        </div>
        
        <button className='bg-orange-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>
            know more
        </button>
       
        </div>
        
        </div>
    )
}

export default Hero;