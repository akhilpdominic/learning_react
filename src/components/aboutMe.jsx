import React from 'react'
import devimg from '../assets/devimg.png'


const About = () =>{
    return(
        <div className='bg-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                
                    <img className='w-[300px] mx-auto my-4' src={devimg} alt="/" />
               <div className='flex flex-col justify-center'>
                <p className='font-mono font-bold text-2xl'>Hi</p>
                <br></br>
                <p className='font-mono text-lg'>
                I am a computer science student currently in my senior year. 
                My passion for computer science from a very young age led me to taking up
                Computer science as my field of study. Feel free to take a look at my side projects
                and if you have a suitable opening for me, please let me know 😊.
               
                </p>
                <button className='bg-orange-600 w-[200px] text-white rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get started
        </button>
                </div>
                

            </div>
        </div>
    )
}

export default About;