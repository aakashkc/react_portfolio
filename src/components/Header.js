import React ,{useEffect, useState} from 'react'
import Nav from './nav'
import Mobilenav from './mobilenav';


function Header() {
    const [bg, setBg]=useState(false);

    useEffect(()=> {
        window.addEventListener('scroll',()=>{
            return window.scrollY > 80 ? setBg(true) : setBg(false);
        });
    })
    return (

        <div className={`${ bg ? 'bg-tertiary h-16 ': 'h-20'} flex  justify-between items-center fixed top-0   w-full  px-24 sm:px-2 text-white z-50 transition-all duration-300 border border-white`}>
        
        <div>
            <h1 className='text-white text-[35px] font-[600]'>Portfo<span className={`${bg? 'text-white':'text-tertiary'}`}>lio.</span></h1>

        </div>
        <div className='hidden md:block'>
            <Mobilenav />
        
        </div>





        <div className='block md:hidden'>
        <Nav bg={bg}/>

        </div>
        
        
        </div>
        

        
    )
}

export default Header
