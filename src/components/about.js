import React from 'react'
import profile from '../assets/img/profile-1.jpeg'
import Typed from 'react-typed';


function About() {
    return (
        // shorthand tag Fragment which allows us to group a list of elements without wrapping them in a new node
        <>
        {/*  About title */}
        <div id="about" className="py-24 bg-[#fff] px-24 border  sm:px-3">
            <div  className='flex  flex-col p-4 items-center space-y-1'>
                <h1 className='font-semibold  text-4xl'>About me</h1>
                <div className='flex items-center space-x-1'>
                    <div className='bg-[#111] h-[3px] w-10'>

                    </div>

                    <h1 className='text-tertiary text-[20px] font-semibold'>Who I am</h1>

                    <div className='bg-[#111] h-[3px] w-10'>

                    </div>
                </div>
            </div>
            {/*About Image and Description  */}
            <div className='  grid grid-cols-3 gap-10 my-10 sm:grid-cols-1 sm:gap-0 sm:space-y-10'>
                <div className=' col-span-1'>
                    <img className='object-cover h-[350px] w-[314px] sm:w-full rounded-lg' src={profile} alt=""></img>


                </div>
                <div className=' flex flex-col justify-center sm:items-center space-y-2.5 text-justify col-span-2 p-5 border border-black'>
                    <div className='h-12'>

                    <h1 className="text-black text-xl max-h-max font-semibold ">I'm Prakash and I'm a <Typed
                        className='text-tertiary  font-semibold px-1'
                        strings={['Designer', 'Developer','freelancer']}
                        typeSpeed={140}
                        backSpeed={140}
                        loop
                        />
                    </h1>
                    </div>
                    <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>

                    <button className='bg-tertiary  text-white px-[30px] py-[8px] rounded hover:bg-transparent hover:text-black  border-transparent border  hover:border-tertiary  text-[22px] max-w-max'>Download CV</button>




                </div>


            </div>
            </div>

        </>
    )
}

export default About
