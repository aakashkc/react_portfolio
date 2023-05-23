import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../data';

import profile1 from '../assets/img/teams/profile-1.jpeg'
import profile2 from '../assets/img/teams/profile-2.jpeg'
import profile3 from '../assets/img/teams/profile-3.jpeg'
import profile4 from '../assets/img/teams/profile-4.jpeg'
import profile5 from '../assets/img/teams/profile-5.jpeg'


function Teams() {
    const [Show, setState] = useState(null)

    const data = [
        {
            image: profile1,
            name: "Someone Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

        },
        {
            image: profile2,
            name: "Someone Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

        },
        {
            image: profile3,
            name: "Someone Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

        },
        {
            image: profile4,
            name: "Someone Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

        },
        {
            image: profile5,
            name: "Someone Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

        },

    ]
    return (
        <div id="teams" className=' px-24 py-24 bg-black sm:px-2'>
            <div className=' flex flex-col  items-center  p-6  space-y-2' >

                <h1 className='text-4xl  text-white font-semibold'>My Teams</h1>
                <div className='flex items-center '>
                    <div className='h-[3px] w-5 bg-white'>

                    </div>
                    <h1 className='text-tertiary px-[5px] text-[18px] font-semibold'>Who with me</h1>
                    <div className='h-[3px] w-5 bg-white'>

                    </div>

                </div>
            </div>

            <Carousel
               
                showDots={true}
                responsive={responsive}
                className="z-40"
               
            >
                {
                    data.map((item, index) => {
                        return (
                            <div onMouseOver={() => { setState(index) }}
                                onMouseLeave={() => { setState(null) }}
                                className=' bg-[#222222] p-10 mx-5 cursor-pointer rounded-lg mt-16  hover:bg-tertiary' key={index}>
                                <div className={`${Show === index ? "text-white scale-110" : ""} flex flex-col items-center space-y-2 text-justify `}>
                                    <img src={item.image} alt="" className={` h-[150px] w-[150px] border-4 ${Show===index ?" border-white":" border-tertiary"} rounded-full object-cover `}></img>
                                    <h1 className='text-white'>{item.name}</h1>
                                    <p className='text-white'>{item.description}</p>



                                </div>

                            </div>)
                    })}

            </Carousel>;



        </div>

    )
}

export default Teams
