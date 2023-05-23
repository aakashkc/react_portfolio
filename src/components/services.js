import React, { useState } from 'react';
import { service } from "../data";

function Services() {
    const [Show, setState] = useState(null)
    return (
        <>
            <div id="services" className="bg-[#111]  py-24 space-y-10 px-24 sm:px-4">

                <div className=' flex flex-col  items-center  p-10 text-[#fff] space-y-2' >

                    <h1 className='text-4xl   font-semibold'>My Services</h1>
                    <div className='flex items-center '>
                        <div className='h-[3px] w-5 bg-[#fff]'>

                        </div>
                        <h1 className='text-tertiary px-[5px] text-[18px] font-semibold'>What i provide</h1>
                        <div className='h-[3px] w-5 bg-[#fff]'>

                        </div>

                    </div>
                </div>



                <div className='grid grid-cols-3 gap-8 sm:grid-cols-1'>
                    {service.map((items, index) => {
                        return (
                            // <div className='flex justify-center p-5 bg-[#222]'>
                            <div onMouseOver={() => { setState(index) }} onMouseLeave={() => { setState(null) }} className=' bg-[#222] p-10  hover:bg-tertiary cursor-pointer rounded-lg border border-white'>
                                <div className={`${Show === index ? " text-white scale-110" : "text-tertiary"} text-center duration-300  transition-all flex flex-col justify-center items-center space-y-2 border border-yellow-500`}>
                                    <i className="" >{items.icon}</i>
                                    <h1 className='text-[25px] font-semibold text-[#fff]'>{items.title}</h1>
                                    <p className=' text-lg text-[#fff]'>{items.description}</p>
                                </div>
                            </div>
                            // </div>



                        )

                    })}





                </div>

            </div>



        </>

    )
}

export default Services
