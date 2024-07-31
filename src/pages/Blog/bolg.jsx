
import { useState } from 'react';


import { FaRegCalendar } from "react-icons/fa6";

import image1 from '../../assets/img/Rectangle 61.png'
import image2 from '../../assets/img/Rectangle 59.png'
import image3 from '../../assets/img/Rectangle 59 (1).png'
import image4 from '../../assets/img/Rectangle 59 (2).png'
import image5 from '../../assets/img/Rectangle 59 (3).png'

import { IoSearchOutline } from "react-icons/io5";

import { FaPlus } from "react-icons/fa6";






export const BlogPage = () => {



    const [blogstype, setBlogstype] = useState([
        {
            blogName: "Education and developement"
        },
        {
            blogName: "Toy Safety"
        },
        {
            blogName: "Toy Trends"
        },
        {
            blogName: "Customer Stories"
        },
        {
            blogName: "Events and Promotions"
        },
    ])

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Enhancing motor skills through play",
            image: image2,
            date: "March 24, 2024",
            description: "Motor skills are divided into two categories: fine motor skills and gross motor skills. Toys play a vital role in the development of both.",
        },
        {
            id: 2,
            title: "Fostering problem solving skills",
            image: image3,
            date: "March 24, 2024",
            description: "Problem-solving is a critical skill that children begin to develop from a very young age through interactive and engaging play. Toys that challenge children to think and strategize encourage this development.",
        },
        {
            id: 3,
            title: "Emotional and Social Development",
            image: image4,
            date: "March 24, 2024",
            description: "Toys also help children express their emotions and understand those of others, which is foundational for developing empathy and interpersonal skills.",
        },
        {
            id: 4,
            title: "Language Development and Social Skills",
            image: image5,
            date: "March 24, 2024",
            description: "Language development is significantly influenced by interactive play. Toys that involve multiple participants can help develop this skill, as well as social skills.",
        },

    ])
    return (
        <>
            <section>
                <div className='py-10'>
                    <h1 className='text-2xl font-medium lg:pl-20'>Home /<span className='text-blue-600 pl-2 text-2xl'>News</span></h1>
                </div>
                <div className='flex justify-center'>
                    <div className='lg:w-[88vw] flex gap-16 pb-16'>
                        <div className='lg:w-[25%] flex flex-col gap-4'>
                            <h1 className='text-3xl font-semibold pb-6'> Blog standard</h1>
                            <div className=" border-2 mb-4 border-full rounded-full flex ">
                                <form action="" className="w-[100%] flex  justify-between">

                                    <input type="text" className=" m-1  outline-none pl-2 w-[100%]  " placeholder="Search" />
                                    <div className="bg-blue-600 rounded-full p-2  ">
                                        <IoSearchOutline className="text-xl text-white  " />
                                    </div>
                                </form>
                            </div>
                            <div className='px-3 pb-6 flex flex-col gap-4 border rounded-2xl'>
                                <h1 className='text-2xl pt-6 pb-4 font-semibold'>Categories</h1>
                                {
                                    blogstype.map((element) => <>
                                        <div className='flex gap-2 items-center text-xl pb-2'>
                                            <FaPlus />
                                            <p className='text-base font-semibold'>{element.blogName} </p>
                                        </div>
                                    </>)
                                }
                            </div>
                            <div className='px-3 py-6 flex flex-col gap-4 border rounded-2xl '>
                                <h1 className='text-2xl '>Popular products</h1>
                                {
                                    blogs.map((element) => <>

                                        <div className='flex items-center gap-2'>
                                            <div className='lg:w-[60%] '>
                                                <img className='h-[15vh]  w-[100%]' src={element.image} alt="" />
                                            </div>
                                            <p className='text-xl  font-semibold'>{element.title}</p>
                                        </div>

                                    </>)
                                }

                            </div>
                            <div className='px-3 py-6 flex flex-col gap-4 border rounded-2xl '>
                                <h1 className='text-2xl '>Popular Tag</h1>
                                <div className="flex flex-wrap gap-x-4 gap-y-5 text-lg  ">
                                    <p className='p-2 border rounded-xl'> Learn & Inspire</p>
                                    <p className='p-2 border rounded-xl'> Top Toy</p>
                                    <p className='p-2 border rounded-xl'> Family fun</p>
                                    <p className='p-2 border rounded-xl'> Toy Reviews</p>
                                    <p className='p-2 border rounded-xl'> Toy Trends</p>
                                    <p className='p-2 border rounded-xl'> Tips & Tricks</p>
                                </div>
                            </div>
                            <div className=' flex flex-col gap-4 border rounded-2xl  w-[100%] h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${image1})` }}>

                            </div>
                        </div>
                        <div className='lg:w-[75%]  rounded-2xl flex flex-col gap-6 '>
                            {
                                blogs.map((element, id) => <>
                                    <div className='p-3 flex flex-col gap-4 border rounded-xl'>
                                        <img src={element.image} alt="" />
                                        <div className='p-2 flex gap-3 items-center text-xl border rounded-xl w-[fit-content]'>
                                            <FaRegCalendar className='text-blue-600' />
                                            <p className='text-lg'>{element.date}</p>
                                        </div>
                                        <p className='text-2xl font-semibold'>{element.title}</p>
                                        <p className='text-lg'>{element.description}</p>
                                    </div>
                                </>)
                            }
                        </div>


                    </div>
                </div>
            </section >
        </>
    )
}
