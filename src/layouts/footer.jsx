import React from 'react';

import image1 from '../assets/img/Footer.png'
import image2 from "../assets/img/image 2.png"
import image3 from "../assets/img/Vector.png"
import image4 from "../assets/img/Vector (1).png"
import image5 from "../assets/img/Vector (2).png"
import image6 from "../assets/img/Vector (3).png"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='bg-cover bg-no-repeat  lg:h-[80vh] flex lg:flex-row flex-col items-center lg:gap-4 gap-8 lg:py-0 py-12 lg:pl-16 lg:pb-16 ' style={{ backgroundImage : `url(${image1})` }}>
            <div className='flex flex-col  gap-4 lg:w-[20vw] w-[90%]'>
                <img className='lg:w-[15vw] w-[40vw] cursor-pointer' onClick={()=>navigate('/')} src={image2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur. lorem</p>
                <div className='flex gap-6'>
                    <a href=""><img src={image3} alt="" /></a>
                    <a href=""><img src={image4} alt="" /></a>
                    <a href=""><img src={image5} alt="" /></a>
                    <a href=""><img src={image6} alt="" /></a>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:pl-8 lg:w-[20vw] w-[90%]'>
                <h1 className='text-2xl'>My account</h1>
                <p>Track my order</p>
                <p>Terms of use </p>
                <p>Wishlist </p>
                <p>Submit your feedback </p>
            </div>
            <div className='flex flex-col gap-4 lg:w-[20vw] w-[90%]'>
                <h1 className='text-2xl'>Customer service</h1>
                <p>Mondau to friday </p>
                <p>10am-6pm(NewYork time) </p>
                <p>Call us : <span className='text-blue-500'>123-456-7868</span> </p>
                <p>Email us : <span className='text-blue-500'>info@example.com</span> </p>
            </div>

            
        </footer>
    );
};




export default Footer;