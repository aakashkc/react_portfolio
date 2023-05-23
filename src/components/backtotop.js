import React, {useState, useEffect}from 'react'
import {FaAngleUp} from 'react-icons/fa'
import {  animateScroll as scroll } from 'react-scroll';

function Backtotop() {
    const [show, setShow]=useState(false);
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            return window.scrollY >600 ? setShow(true):setShow(false); 
        });
    });
    const scrollToTop=()=>{
        scroll.scrollToTop();
    }
      
    return (

        <>
        {show && (
        <button
          onClick={() => scrollToTop()}
          className=' z-50 text-white w-12 h-12 rounded fixed right-5 bottom-24 cursor-pointer flex justify-center items-center transition-all'
        >
        <FaAngleUp   className='font-[900] h-[38px] w-[35px]  bg-tertiary'/>
        </button>
      )
        }
        </>
        
    )
}

export default Backtotop
