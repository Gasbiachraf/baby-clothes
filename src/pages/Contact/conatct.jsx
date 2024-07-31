import React from 'react';
import image1 from '../../assets/img/Ringer Volume.png'
import image2 from '../../assets/img/Envelope.png'
import image3 from '../../assets/img/Address.png'
export const ContactPage = () => {
    return (
        <section className='flex justify-center'>
            <div className='lg:w-[88%]'>
                <div className='text-2xl py-10 font-semibold'>
                    <p>Home / <span className='text-blue-600'>Contact</span></p>
                </div>
                <h1 className='text-4xl font-semibold pt-4 pb-10'>Contact</h1>
                <div className='flex justify-between gap-4'>
                    <div className="py-4 w-[100%] border rounded-2xl flex flex-col items-center">
                        <img className='pb-4' src={image1} alt="" />
                        <p className='text-xl pb-2 font-semibold text-center'>Phone number</p>
                        <p className='text-center text-lg'>123-456-7868</p>
                    </div>
                    <div className="py-4 w-[100%] border rounded-2xl flex flex-col items-center">
                        <img className='pb-4' src={image2} alt="" />
                        <p className='text-xl pb-2 font-semibold text-center'>Email</p>
                        <p className='text-center text-lg'>info@example.com</p>
                    </div>
                    <div className="py-4 w-[100%] border rounded-2xl flex flex-col items-center">
                        <img className='pb-4' src={image3} alt="" />
                        <p className='text-xl pb-2 font-semibold text-center'>Address place</p>
                        <p className='text-center lg:px-20 text-lg'>1930 marigold lan, way Miami, florida USA</p>
                    </div>

                </div>
                <div className="flex gap-10 py-24">
                    <div className='lg:w-[55%] sm:w-[100%]'>
                        <iframe className='w-[100%] lg:h-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229929.22597780332!2d-80.39426962891655!3d25.782314662068746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Floride%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sma!4v1722427050145!5m2!1sfr!2sma" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className='lg:w-[45%] sm:w-[100%] flex flex-col gap-4 py-6'>
                        <h1 className='text-2xl font-semibold pb-4'>Contact us</h1>
                        <form className='flex flex-col gap-6 text-lg'>
                            <input className='border-2 rounded-2xl outline-none p-2' placeholder='Your Name' type="text" />
                            <input className='border-2 rounded-2xl outline-none p-2' placeholder='Phone number' type="number" />
                            <input className='border-2 rounded-2xl outline-none p-2' placeholder='Email address' type="text" />
                            <textarea className='border-2 rounded-2xl outline-none p-2 h-[18vh]' placeholder='Write your comment here...' type="text" />
                            <input type="submit" value={"Send"} className='bg-blue-600 w-24 px-2 py-2 rounded-xl text-white' />
                        </form>
                    </div>
                </div>

            </div>

        </section>
    );
};

