import React from 'react'

import Etick from '../assets/etick1.png'

const Projects = () =>
{
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl bg-slate-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-sky-300'>
                <div className='flex py-5 mx-auto justify-center'>
                    <img classname='py-6 mx-auto bg-white ' src={Etick} alt="" />

                    </div>

                    <div className='flex-none px-3 py-3'>
                    
                   
                    <h2 className="font-bold text-3xl font-mono border-b-2 border-cyan-900 mb-4 ">E-tick</h2>
                <p className='font-mono'>Etick is a bus ticket automation system that
                eases the process of obtaining tickets on public 
                buses
                </p>
                    </div>
               
                
                </div> 

                <div className='w-full shadow-xl bg-slate-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-sky-300'>
                <div className='flex py-5 mx-auto justify-center'>
                    <img classname='py-6 mx-auto bg-white ' src={Etick} alt="" />

                    </div>

                    <div className='flex-none px-3 py-3'>
                    
                   
                    <h2 className="font-bold text-3xl font-mono border-b-2 border-cyan-900 mb-4 ">FOODE</h2>
                <p className='font-mono'>Etick is a bus ticket automation system that
                eases the process of obtaining tickets on public 
                buses
                </p>
                    </div>
               
                
                </div> 

            </div>
        </div>
    );
}

export default Projects;