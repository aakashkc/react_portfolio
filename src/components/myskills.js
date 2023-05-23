import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
function Myskills() {
    return (
        <>
            <div id="skills" className=' bg-[#f1f1f1] px-24  py-24  sm:px-4'>
                <div className=' flex flex-col  items-center  p-10  space-y-2' >

                    <h1 className='text-4xl   font-semibold'>My Skills</h1>
                    <div className='flex items-center '>
                        <div className='h-[3px] w-5 bg-black'>

                        </div>
                        <h1 className='text-tertiary px-[5px] text-[18px] font-semibold'>What i know</h1>
                        <div className='h-[3px] w-5 bg-black'>

                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-2 gap-16 sm:grid-cols-1 sm:gap-2'>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='font-bold text-[20px] '>My creative skills & experiences.</h1>
                        <p className='text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi.
                            Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum.
                            Ad delectus natus aut hic explicabo minus quod.</p>
                        <button className='bg-tertiary  text-white p-2 rounded hover:bg-transparent hover:text-black  border-transparent border  hover:border-tertiary  text-[22px] max-w-max'>Read more</button>

                    </div>
                    <div className='flex flex-col  space-y-5 mt-10'>
                        <div className='flex flex-col '>

                            <div className='flex justify-between '>
                                <h1 className="text-[18] font-semibold" >HTML</h1>
                                <h1 className="text-[18] font-semibold" >90%</h1>
                            </div>
                            <ProgressBar completed={90} height={5} bgColor={'crimson'} customLabel=" " baseBgColor="#d3d3d3" borderRadius={0} />

                        </div>
                        <div className='flex flex-col '>

                            <div className='flex justify-between '>
                                <h1 className="text-[18] font-semibold" >CSS</h1>
                                <h1 className="text-[18] font-semibold" >60%</h1>
                            </div>
                            <ProgressBar completed={60} height={5} bgColor={'crimson'} customLabel=" " baseBgColor="#d3d3d3" borderRadius={0} />

                        </div>
                        <div className='flex flex-col '>

                            <div className='flex justify-between '>
                                <h1 className="text-[18] font-semibold" >JavaScript</h1>
                                <h1 className="text-[18] font-semibold" >80%</h1>
                            </div>
                            <ProgressBar completed={80} height={5} bgColor={'crimson'} customLabel=" " baseBgColor="#d3d3d3" borderRadius={0} />

                        </div>
                        <div className='flex flex-col '>

                            <div className='flex justify-between '>
                                <h1 className="text-[18] font-semibold" >PHP</h1>
                                <h1 className="text-[18] font-semibold" >50%</h1>
                            </div>
                            <ProgressBar completed={50} height={5} bgColor={'crimson'} customLabel=" " baseBgColor="#d3d3d3" borderRadius={0} />

                        </div>
                        <div className='flex flex-col '>

                            <div className='flex justify-between '>
                                <h1 className="text-[18] font-semibold" >CSS</h1>
                                <h1 className="text-[18] font-semibold" >70%</h1>
                            </div>
                            <ProgressBar completed={70} height={5} bgColor={'crimson'} customLabel=" " baseBgColor="#d3d3d3" borderRadius={0} />

                        </div>



                    </div>

                </div>


            </div>
        </>

    )
}

export default Myskills

