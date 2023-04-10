import React from 'react'

const Contact = () =>
{
    return(


        
        <div className='w-full py-16 text-white '>
            <div>
               <div className='max-width-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 '>
                <h1 className='md:text-4xl sm-text-3xl text-2xl font-bold py-2'>Let's Connect 😊
                </h1>
                <h1 className='md:text-2xl sm-text-xl text-xl py-2'>
                Please leave your message here and I'll get back to you
                </h1>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black mr-3' type="email" placeholder='Enter message' />
                        <button className='bg-orange-600 w-[200px] text-white rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ml-4 px-4'>
            submit
        </button>
                    </div>
                </div>
                </div> 
            </div>
             
        </div>
    )
}

export default Contact