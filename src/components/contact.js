import { useFormik } from 'formik'
import React from 'react'
import { IoPerson } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 Characters or less")
                .required('Required')
                .test('is-fullname', 'first and last name required', (values) => {
                    const name = values.split(" ");
                    return name.length >= 2
                }),
            email: Yup.string()
                .email('Must be a valid email address')
                .required('Required'),
            subject: Yup.string()
                .max(20, "Must be 20 characters or less")
                .min(3, "Must be at least 3 characters ")
                .required(),
            message: Yup.string()
                .max(200, "Must be 100 Characters or less")
                .min(10, 'Must be at least 10 characters')


        }),
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            toast.success('Form Submitted Successfully !', {
                position: toast.POSITION.TOP_RIGHT,
                className:''
            });
            resetForm();
        }
    })
    return (
        <>
    <ToastContainer   />

            <div id="contact" className='px-24 py-16 bg-[#fff] flex flex-col space-y-5 sm:px-4'>
                <div className='flex  flex-col p-5 items-center  space-y-1'>
                    <h1 className='font-semibold  text-4xl'>Contact me</h1>
                    <div className='flex items-center space-x-1'>
                        <div className='bg-[#111] h-[3px] w-10'>

                        </div>

                        <h1 className='text-tertiary text-[20px] font-semibold'>get in touch</h1>

                        <div className='bg-[#111] h-[3px] w-10'>

                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 content-center gap-10 sm:grid-cols-1'>
                    <div className='flex flex-col space-y-3 '>
                        <h1 className='text-[20px] font-bold'>Get in Touch</h1>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>

                        <div className='flex space-x-8  items-center'>
                            <div className=''>
                                <IoPerson size={25} color={'#dc143c'} />
                            </div>
                            <div className='text-[16px] '>
                                <p className='text-[#000000]'>Name</p>
                                <p className='text-[#333333]'>Prakash Shahi</p>
                            </div>

                        </div>

                        <div className='flex space-x-8  items-center'>
                            <div className=''>
                                <MdLocationPin size={25} color={'#dc143c'} />
                            </div>
                            <div className='text-[16px] '>
                                <p className='text-[#000000]'>Address</p>
                                <p className='text-[#333333]'>Surkhet, Nepal</p>
                            </div>

                        </div>

                        <div className='flex space-x-8  items-center'>
                            <div className=''>
                                <MdEmail size={25} color={'#dc143c'} />
                            </div>
                            <div className='text-[16px] '>
                                <p className='text-[#000000]'>Email</p>
                                <p className='text-[#333333]'>abc@gmail.com</p>
                            </div>

                        </div>



                    </div>

                    <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-1'>


                        <h1 className='text-[20px] font-semibold sm:text-center'>Message Me</h1>
                        <div className='flex space-x-2 w-full  text-[17px] sm:flex-col sm:space-y-3 sm:space-x-0 '>
                                <div className='flex flex-col w-1/2 sm:w-full h-[60px] '>

                                
                                <input type='text' name="name"
                                    placeholder='Name'
                                    className={`px-[15px]  border border-[#d3d3d3] rounded-md text-black bg-[#ffffff] h-[45px] w-full  ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'} `}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus}
                                    value={formik.values.name} />


                                {formik.touched.name && formik.errors.name && (<span className=' text-xs text-red-400'>
                                    {formik.errors.name}
                                </span>)}
                                </div>


                                <div className='flex flex-col w-1/2 h-[60px] sm:w-full '>

                                <input type='email' name="email" placeholder='Email' className={`px-[15px] border border-[#d3d3d3] rounded-md text-black bg-[#ffffff] h-[45px] w-full sm:w-full ${formik.touched.email && formik.errors.email ? "border-red-400" : " border-gray-300"}`} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus} value={formik.values.email} />
                                {formik.touched.email && formik.errors.email && (<span className='text-red-400 text-xs '>
                                    {formik.errors.email}
                                </span>)}
                                </div>

                        </div>
                        <div className='flex flex-col h-[60px] '>
                            
                        <input type='text' name="subject" placeholder='subject' className={`px-[15px] border border-[#d3d3d3] rounded-md text-black bg-[#ffffff] h-[45px] w-full py-3 ${formik.touched.subject && formik.errors.subject ? "border-red-400" : " border-gray-300"}`}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus} value={formik.values.subject}
                            />
                        {formik.touched.subject && formik.errors.subject && (<span className='text-red-400 text-xs '>
                            {formik.errors.subject}
                        </span>)}
                        </div>

                        <div className='flex flex-col  h-[100px]'>

                        <textarea name='message' placeholder='Message..' className={`px-[15px] border border-[#d3d3d3]  rounded-md text-black bg-[#ffffff] h-[90px] w-full py-3 ${formik.touched.message && formik.errors.mesage ? "border-red-400" : " border-gray-300"}`} onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus} value={formik.values.message} />
                        {formik.touched.message && formik.errors.message && (<span className='text-red-400 text-xs '>
                            {formik.errors.message}
                        </span>)}

                        </div>

                        <button className='max-w-max font-semibold text-md py-2 px-3 text-white cursor-pointer bg-tertiary hover:bg-transparent rounded  border-transparent  border-2 hover:border-tertiary hover:text-tertiary'>Send message</button>

                    </form>

                    {/* </div> */}


                </div>


            </div>
        </>

    )
}

export default Contact
