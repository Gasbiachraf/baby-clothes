
import { useContext, useState } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/ContextProvider';
import image1 from "../../../assets/img/herosection.png"
import image2 from "../../../assets/img/Isolation_Mode.png"
import image3 from "../../../assets/img/Isolation_Mode (1).png"
import image4 from "../../../assets/img/Isolation_Mode (2).png"
import image5 from "../../../assets/img/Isolation_Mode (3).png"
import image6 from "../../../assets/img/Group 53.png"
import image7 from "../../../assets/img/banner 1.png"
import image8 from "../../../assets/img/Banner 2.png"
import image9 from "../../../assets/img/Rectangle 23.png"
import image10 from "../../../assets/img/Rectangle 24.png"
import image11 from "../../../assets/img/Rectangle 25.png"
import image12 from "../../../assets/img/Rectangle 26.png"
import image13 from "../../../assets/img/Frame 88.png"
import image14 from "../../../assets/img/Frame 88 (1).png"
import image15 from "../../../assets/img/Frame 88 (2).png"


import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
export const FirstSectionHome = () => {
    const [product, setProduct] = useContext(MyContext)

    const productrate5 = product.filter(element=>(element.rate == 5 && element.category == "sale" ))
    let pproduct = [...productrate5.slice(0,4)]


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



                                <div className={element.id > 8 ? "hidden" : ""}>
                                    <div className=' rounded-lg  lg:w-[22vw]  relative'  >
                                        <div className='absolute right-3  top-3 text-gray-400 '>
                                            <div className='flex flex-col gap-2'>
                                                <CiHeart className='text-3xl' />
                                                <SlBasket className='text-2xl' />
                                            </div>
                                        </div>
                                        <div className='absolute left-2 top-2'>
                                            <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-white font-semibold" : "hidden "}>SALE</p>

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
                                </div>



                            </>
                        )
                    }
                </div>







            </section>

            <section >
                <div className='flex flex-col items-center'> 
                    <div className='lg:w-[90vw] flex gap-8 py-16'>
                        <img className='lg:w-100 ' src={image7} alt="" />
                        <img className='lg:w-100 ' src={image8} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold'>Customer loves</h1>
                    <p>Popular product</p>
                </div>
                <div className='flex flex-wrap lg:pl-16 gap-4 py-10'>
                    {
                        pproduct.map((element, id) =>
                            <>
                                <div>
                                    <div className=' rounded-lg  lg:w-[22vw]  relative'  >
                                        <div className='absolute right-3  top-3 text-gray-400 '>
                                            <div className='flex flex-col gap-2'>
                                                <CiHeart className='text-3xl' />
                                                <SlBasket className='text-2xl' />
                                            </div>
                                        </div>
                                        <div className='absolute left-2 top-2'>
                                            <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-white font-semibold" : "hidden "}>SALE</p>
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
                                </div>
                            </>
                        )
                    }
                </div>
            </section>
            
            <section>

            </section>

            <section>
                <h1 className='text-2xl  font-bold text-center'>Recent photoshoots</h1>
                <p className='text-center py-2'>Check gallery</p>
                <div className='py-10 flex'>
                    <img className='lg:w-[25%]' src={image9} alt="" />
                    <img className='lg:w-[25%]' src={image10} alt="" />
                    <img className='lg:w-[25%]' src={image11} alt="" />
                    <img className='lg:w-[25%]' src={image12} alt="" />
                </div>
                <div className='flex justify-center gap-6 py-10'>
                    <div className='rounded-xl lg:w-[28%] lg:h-[30vh] bg-[#F4FAFF] flex flex-col items-center p-4'>
                        <img src={image13} alt="" />
                        <p className='text-xl'>24h hour follow up</p>
                    </div>
                    <div className='rounded-xl lg:w-[28%] lg:h-[30vh] bg-[#FFFAF4] flex flex-col items-center p-4'>
                        <img src={image14} alt="" />
                        <p className='text-xl'>Free shipping for 150$ and up</p>
                    </div>
                    <div className='rounded-xl lg:w-[28%] lg:h-[30vh] bg-[#F4FFF5] flex flex-col items-center p-4'>
                        <img src={image15} alt="" />
                        <p className='text-xl'>within 7 days</p>
                    </div>
                </div>
                <div className='flex flex-col items-center py-8 '>
                    <h1 className='text-3xl font-bold pb-2'>Newsletter</h1>
                    <p className='lg:w-[54vw] text-2xl text-center'>Get 15% off your first purchase! Plus,  be the first to know about sales, new product launches, and exlusive offres!</p>
                    <div className='py-8'>
                        <form action="">
                            <input placeholder='Enter your email' type="text" className='border-2 rounded-xl lg:w-[30vw] py-2 px-4 ' />
                            <input type="submit" className='bg-blue-600 py-2 px-6 rounded-xl text-white lg:ml-4' value={"Join"} />
                        </form>
                    </div>
                </div>
            </section>





        </>
    );
}
