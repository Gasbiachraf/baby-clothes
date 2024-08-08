
import React, { useState } from 'react';


import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

import image1 from '../../../assets/img/profilachraf.jpeg'
import image2 from '../../../assets/img/profilhamza.jpeg'
import image3 from '../../../assets/img/profilzakaria.jpeg'
import image4 from '../../../assets/img/profilghizlan.jpeg'
import image5 from '../../../assets/img/profillarbi.jpeg'
import carouseltop from '../../../assets/img/carouseltop.svg'
import carouselright from '../../../assets/img/carouselright.svg'
import carouselleft from '../../../assets/img/carouselleft.svg'
import carouselqoute from '../../../assets/img/carouselquote.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.refresh();




export const Carousel = () => {

    let [buttonleft, setButtonleft] = useState(1)
    let [buttonright, setButtonright] = useState(3)
    let [animation, setAnimation] = useState("fade-right")




    const flechleft = () => {
        if (buttonleft > 1) {
            let minusleft = buttonleft - 1
            let minusright = buttonright - 1
            setButtonleft(minusleft)
            setButtonright(minusright)
            setAnimation('fade-right')
        } else {
            // alert('maymknch left')
        }
    }
    const flechright = () => {
        if (buttonright < number.length) {
            let addleft = buttonleft + 1
            let addright = buttonright + 1
            setButtonleft(addleft)
            setButtonright(addright)
            setAnimation('fade-left')
        } else {
            // alert("maymkanch right")
        }
    }
    const [number, setNumber] = useState([
        {
            id: 1,
            parentName: "Achraf",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto Lorem ipsum dolor sit amet",
            image: image1
        },
        {
            id: 2,
            parentName: "Hamza",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto Lorem ipsum dolor sit amet ",
            image: image2
        },
        {
            id: 3,
            parentName: "Zakaria",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto Lorem ipsum dolor sit amet",
            image: image3
        },
        {
            id: 4,
            parentName: "Ghizlane",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto Lorem ipsum dolor sit amet",
            image: image4
        },
        {
            id: 5,
            parentName: "Larbi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto Lorem ipsum dolor sit amet",
            image: image5
        },
    ])

    
    return (
        <section className='flex justify-center py-8'>
            <div className='flex flex-col  w-[90vw] items-center lg:pb-16 pb-4 '>
                <h1 className='lg:text-4xl text-2xl lg:px-0 px-3 text-center font-semibold pb-2 '>Hear from Other Happy Parents </h1>
                <p className='lg:pb-16 pb-8 text-xl'>Customer testimonials</p>
                <div className='flex  lg:flex-row flex-col gap-6 w-[100%]    relative text-xl'>

                    {
                        number.map((element, id) => <>
                            <div key={id} className={element.id >= buttonleft ? (element.id <= buttonright ? 'rounded-xl bg-[#FAEFEF]  flex flex-col gap-4 w-[100%]   ' : "hidden ") : "hidden"}>
                                <div className='relative py-6 pl-10 pr-6'>
                                    <div className='pt-4 flex gap-1 '>
                                        <FaStar className='text-yellow-400 text-xl' />
                                        <FaStar className='text-yellow-400 text-xl' />
                                        <FaStar className='text-yellow-400 text-xl' />
                                        <FaStar className='text-yellow-400 text-xl' />
                                        <FaStar className='text-yellow-400 text-xl' />
                                    </div>
                                    <p className='text-lg'>{element.text}</p>
                                    <div className="flex gap-4 items-center pt-3">
                                        <img className='rounded-full border lg:w-[3vw] lg:h-[3vw] w-[13vw] h-[13vw]' src={element.image} alt="" />
                                        <p>{element.parentName}</p>
                                    </div>
                                    <img className='absolute top-2 right-2 z-20' src={carouselqoute} alt="" />
                                    <img className='absolute top-2 right-16 z-20'  src={element.id %2 != 1 ? carouseltop :carouselright }  alt="" />
                                    <img className='absolute bottom-1 right-1  z-20' src={element.id %2 == 1 ? carouseltop :carouselright }  alt="" />
                                    <img className='absolute  bottom-0 left-0 z-20' src={carouselleft} alt="" />
                                </div>
                            </div>
                        </>)
                    }
                    <div onClick={() => flechleft()} className='absolute -left-5 bottom-1/3 mb-5  mr-4 border-4 rounded-full  cursor-pointer max-[430px]:hidden'>
                        <SlArrowLeft className='text-4xl  text-slate-300 p-2 font-bold  ' />
                    </div>
                    <div onClick={() => flechright()} className='absolute -right-9 bottom-1/3 mb-5  mr-4 border-4 rounded-full cursor-pointer max-[430px]:hidden'>
                        <SlArrowRight className='text-4xl  text-slate-300 p-2  font-sold  ' />
                    </div>
                </div>
            </div>

        </section >
    );
};

