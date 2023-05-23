import React from 'react'
import Typed from 'react-typed';

import Header from './Header'

function Home() {
    return (
        <>
            <div id='home' className='h-screen bg-homeImage bg-cover bg-fixed flex flex-col '>
                

                    <div>
                        <Header />
                    </div>

                    <div className=' grid grid-cols-2 sm:grid-cols-1 content-center h-screen  px-24  my-16 sm:px-2 ' >
                        <div className='flex flex-col space-y-1 text-white  sm:px-2'>

                            <h1 className='text-[27px]'>Hello, my name is </h1>
                            <h1 className='text-[50px] font-[600]'>Prakash Shai </h1>
                            <h1 className='text-[40px] font-[600] sm:text-[27px]'>And I'm a<Typed
                                className='text-tertiary  font-bold px-2'
                                strings={['Designer', 'Developer', 'Freelancer',]}
                                typeSpeed={140}
                                backSpeed={140}
                                loop
                            />
                            </h1>
                            

                                <button className='bg-tertiary  px-[30px] py-[8px] mt-4 rounded hover:text-tertiary hover:bg-transparent  border-transparent hover:border-tertiary border  text-white text-[22px] max-w-max'>Hire Me</button>
                                {/* <button className='bg-tertiary px-[30px] py-[8px] rounded hover:bg-transparent hover:border border-tertiary  duration-300 text-white text-[22px] '>Hire me</button> */}
                            

                        </div>
                    </div>

                </div>


            







        </>

    )
}

export default Home
