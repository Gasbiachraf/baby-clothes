
import { useContext, useState } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/ContextProvider';
import image1 from "../../../assets/img/herosection.png"
import image2 from "../../../assets/img/Isolation_Mode.png"
import image3 from "../../../assets/img/Isolation_Mode (1).png"
import image4 from "../../../assets/img/Isolation_Mode (2).png"
import image5 from "../../../assets/img/Isolation_Mode (3).png"
import image6 from "../../../assets/img/Group 53.png"
import image10 from "../../../assets/img/image 11 (11).png"
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
export const FirstSectionHome = () => {
    const [product, setProduct] = useContext(MyContext)
    const x = 8;

    function multiple(params) {
        return (params)
        return (params)
        return (params)
        return (params)
        return (params)
    }



    // const myArray = ['apple', 'banana', 'orange'];
    return (
        <>



            <section className=' bg-center bg-cover bg-no-repeat lg:h-[100vh] lg:w-full relative' style={{ backgroundImage: `url(${image1})` }}>
                <div className='w-[50vw] absolute end-0 top-24'>
                    <h1 className=' lg:pr-24 lg:pt-16 lg:text-5xl'>Play, learn, & grow!</h1>
                    <p className='pt-6 pb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='bg-yellow-400 py-3 px-8 rounded-full'>Shop now</button>
                </div>
            </section>
            <section className='text-center py-10'>
                <h1 className='text-2xl font-bold '>Find the Perfect Toy </h1>
                <p className='pb-10'>our collections</p>
                <div className='flex justify-center gap-16 '>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image2} alt="" />
                        <p className='decoration-current'>Playsets</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image3} alt="" />
                        <p>Control Toys</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image4} alt="" />
                        <p>Educational Toys</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image5} alt="" />
                        <p>Eco-friedly Toys</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image6} alt="" />
                        <p>Stuffed Toys</p>
                    </div>
                </div>
            </section>


            <section>
                <h1 className='text-2xl font-bold text-center py-10 '>Top picks for your littleones</h1>
                <div className='justify-center flex gap-10 text-2xl'>
                    <p>Featured</p>
                    <p>Best seller</p>
                    <p>New Arrivals</p>
                </div>
                <div className='flex flex-wrap lg:pl-16 gap-4 py-10'>
                    {
                        product.map((element, id) =>
                            <>



                                <div className=' rounded-lg  lg:w-[22vw]  relative'  >
                                    <div className='absolute right-3  top-3 text-gray-400 '>
                                        <div className='flex flex-col gap-2'>
                                            <CiHeart className='text-3xl' />
                                            <SlBasket className='text-2xl' />
                                        </div>
                                    </div>
                                    <div className='absolute left-2 top-2'>
                                    <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-white font-semibold" : "hidden " }>SALE</p>

                                    </div>
                                    <img className='lg:w-[22vw]' src={element.image} alt="" />
                                    <p className='pt-4 font-medium text-xl'>{element.productName}</p>
                                    <p className={element.oldprice != 0 ? "text-green-500 text-xl" : "text-black text-xl"}>${element.price}.00 <span className={element.oldprice == 0 ? "hidden" : "text-black line-through text-base"}>${element.oldprice}.00</span></p>
                                    <div className="">
                                        <div className='pt-4 flex gap-1'>
                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                        </div>
                                    </div>




                                </div>



                            </>
                        )
                    }
                </div>







            </section>





        </>
    );
}
