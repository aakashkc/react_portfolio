import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

import { navigation } from '../data'
import { Link } from 'react-scroll'

function Mobilenav() {
    const [toogle, setToogle]=useState(false)
    return (
        <>
        {
            toogle ?
            <AiOutlineClose onClick={()=>setToogle(!toogle) } className='text-white text-2xl ' />
            :
            <AiOutlineMenu onClick={()=>setToogle(!toogle) } className='text-white text-2xl  '/>
        }

        <div className={`absolute right-0 top-[64px] capitalize z-40 bg-[#111] transition-all duration-300  h-screen space-y-10 flex flex-col justify-center items-center
       overflow-hidden ${toogle ? 'left-[0]' :'left-[100%]'}
        
        `}>
            {navigation.map((item, index) =>{
                return (
                    <div className= 'text-white text-[18px] font-bold cursor-pointer' key={index}>
                        <Link to={item.href} activeClass='active' smooth={true} spy={true} offset={-70}
                        onClick={()=>{
                            setToogle(!toogle)

                        }}
                        >
                        {item.name}

                        </Link>


                    </div>
                )
            })}


        </div>


        </>    )
}

export default Mobilenav
