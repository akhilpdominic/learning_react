import React from 'react'
import devimg from '../assets/devimg.png'


const About = () =>{
    return(
        <div className='bg-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                
                    <img src={devimg} alt="/" />
               <div className='py-6'>
                <p>Hi</p>
                I am a computer science student currently in my senior year. 
                My passion for computer science from a very young age led me to taking up
                Computer science as my field of study. Feel free to take a look at my side projects
                and if you have a suitable opening for me, please let me know 😊.
               </div>
                

            </div>
        </div>
    )
}

export default About;