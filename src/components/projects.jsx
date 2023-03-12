import React from 'react'

import Etick from '../assets/etick1.png'

const Projects = () =>
{
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
                <div className='w-full  border'>
                    <img classname='w-20 mx-auto mt-[-3rem] bg-black' src={Etick} alt="" />
                <h2 className="font-bold text-3xl font-mono">E-tick</h2>
                <p className='font-mono'>Etick is a bus ticket automation system that
                eases the process of obtaining tickets on public 
                buses
                </p>
                
                </div> 

            </div>
        </div>
    );
}

export default Projects;