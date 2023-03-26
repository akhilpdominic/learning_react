import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import github from '../assets/github.png'

const Navbar = () => {
    const [nav,setnav]=useState(false)

    const handleNav=()=>{
        setnav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 mx-auto px-5 text-white'>
           <div className='flex'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

            <ul className=''>

                <img classname='fill-white' src={github} alt="/" />
                
            </ul>

            </div>

            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav? <AiOutlineClose size={20} />
                :
                <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-green-400 bg-slate-600 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-300'}>
            <h1 className='w-full text-3xl m-4 font-bold text-[#00df9a]'>REACT.</h1>

                <ul className='pt-24 uppercase p-4'>
                <li className='p-4 border-b border-green-300'>Home</li>
                <li className='p-4 border-b border-green-300'>About</li>
                <li className='p-4 border-b border-green-300'>Contact</li>
                
                </ul>
            </div>
        </div>
    )
}

export default Navbar
