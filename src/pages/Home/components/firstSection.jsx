
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
import { useNavigate } from 'react-router-dom';
import Example from './modal';
export const FirstSectionHome = () => {
    const [product, setProduct, panier, setPanier , AddToCard ,open, setOpen] = useContext(MyContext)

    const navigate = useNavigate();


    const productrate5 = product.filter(element => (element.rate == 5 && element.category == "sale"))
    let pproduct = [...productrate5.slice(0, 4)]


    return (
        <>

            <section className=' bg-center bg-cover bg-no-repeat lg:h-[100vh] lg:w-full lg:relative' style={{ backgroundImage: `url(${image1})` }}>
                <div className='lg:w-[50vw] pl-48 py-16 lg:py-0 lg:pl-0  lg:absolute lg:end-0 lg:top-24 '>
                    <h1 className=' lg:pr-24 lg:pt-16 lg:text-5xl text-2xl'>Play, learn, & grow!</h1>
                    <p className='pt-6 lg:pb-16 pb-6  lg:text-xl text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button onClick={() => navigate('/shop')} className='bg-yellow-400 lg:py-3 py-2 lg:px-8 px-4 rounded-full'>Shop now</button>
                </div>
            </section>

            <section className='text-center py-10'>
                <h1 className='text-2xl font-bold '>Find the Perfect Toy </h1>
                <p className='pb-10'>our collections</p>
                <div className='flex justify-center gap-16 max-[430px]:flex-col max-[430px]:items-center  w-[100%] '>
                    <div className='max-[430px]:flex max-[430px]:flex-col max-[430px]:mx-auto    '>
                        <img className='lg:w-[12vw] w-[50vw] lg:h-[20vh] pb-2  mx-auto ' src={image2} alt="" />
                        <p className=' text-xl '>Playsets</p>
                    </div>
                    <div className='max-[430px]:flex max-[430px]:flex-col    '>
                        <img className='lg:w-[12vw] w-[50vw] lg:h-[20vh] pb-2  mx-auto ' src={image3} alt="" />
                        <p className=' text-xl '>Control Toys</p>
                    </div>
                    <div className='max-[430px]:flex max-[430px]:flex-col    '>
                        <img className='lg:w-[12vw] w-[50vw] lg:h-[20vh] pb-2 mx-auto ' src={image4} alt="" />
                        <p className=' text-xl '>Educational Toys</p>
                    </div>
                    <div className='max-[430px]:flex max-[430px]:flex-col    '>
                        <img className='lg:w-[12vw] w-[50vw] lg:h-[20vh] pb-2 mx-auto ' src={image5} alt="" />
                        <p className=' text-xl '>Eco-friedly Toys</p>
                    </div>
                    <div className='max-[430px]:flex max-[430px]:flex-col    '>
                        <img className='lg:w-[12vw] w-[50vw] lg:h-[20vh] pb-2 mx-auto ' src={image6} alt="" />
                        <p className=' text-xl '>Stuffed Toys</p>
                    </div>
                </div>
            </section>

            <section>
                <h1 className='text-2xl font-bold text-center py-10 '>Top picks for your littleones</h1>
                <div className='justify-center flex lg:gap-10 gap-6 lg:text-2xl text-xl'>
                    <p>Featured</p>
                    <p>Best seller</p>
                    <p>New Arrivals</p>
                </div>
                <div className='flex flex-wrap lg:pl-16 pl-10 lg:gap-4 gap-8 py-10'>
                    {
                        product.map((element, id) =>
                            <>
                                <div className={element.id > 8 ? "hidden" : ""}>
                                    <div className=' rounded-lg  lg:w-[22vw] w-[80vw]   relative'  >
                                        <div className='absolute right-3  top-3 text-gray-400 '>
                                            <div className='flex flex-col gap-2 z-10'>
                                                <CiHeart className='text-3xl' />
                                                <button onClick={() => AddToCard(element.id)}><SlBasket  className='text-2xl z-10 cursor-pointer' /><Example/></button>
                                                

                                                
                                            </div>
                                        </div>
                                        <div className='absolute left-2 top-2'>
                                            <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-sm text-white font-semibold" : "hidden "}>SALE</p>

                                        </div>
                                        <img onClick={() => { navigate(`/product/${element.id}`) }} className='lg:w-[22vw] w-[80vw]' src={element.image} alt="" />
                                        <p onClick={() => { navigate(`/product/${element.id}`) }} className='lg:pt-4 pt-1 font-medium text-xl'>{element.productName}</p>
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
                <div className='flex flex-col items-center lg:p-0 p-4'>
                    <div className='lg:w-[90vw] flex lg:flex-row flex-col lg:gap-8 gap-4 py-16'>
                        <img className='lg:w-100 ' src={image7} alt="" />
                        <img onClick={() => navigate('/shop')} className='lg:w-100 ' src={image8} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold'>Customer loves</h1>
                    <p>Popular product</p>
                </div>
                <div className='flex flex-wrap lg:pl-16 pl-10 lg:gap-4 gap-8 py-10'>
                    {
                        pproduct.map((element, id) =>
                            <>
                                <div>
                                    <div className=' rounded-lg  lg:w-[22vw] w-[80vw]   relative'  >
                                        <div className='absolute right-3  top-3 text-gray-400 '>
                                            <div className='flex flex-col gap-2'>
                                                <CiHeart className='text-3xl' />
                                                <button><SlBasket onClick={() => AddToCard(element.id)} className='text-2xl cursor-pointer' /> <Example/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='absolute left-2 top-2'>
                                            <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-sm text-white font-semibold" : "hidden "}>SALE</p>
                                        </div>
                                        <img onClick={() => { navigate(`/product/${element.id}`) }} className='lg:w-[22vw] w-[80vw]' src={element.image} alt="" />
                                        <p onClick={() => { navigate(`/product/${element.id}`) }} className='lg:pt-4 pt-1 font-medium text-xl'>{element.productName}</p>
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
                <h1 className='text-2xl  font-bold text-center'>Recent photoshoots</h1>
                <p className='text-center py-2'>Check gallery</p>
                <div className='py-10 flex lg:flex-row flex-col'>
                    <img className='lg:w-[25%] w-[100%]' src={image9} alt="" />
                    <img className='lg:w-[25%] w-[100%]' src={image10} alt="" />
                    <img className='lg:w-[25%] w-[100%]' src={image11} alt="" />
                    <img className='lg:w-[25%] w-[100%]' src={image12} alt="" />
                </div>
                <div className='flex lg:flex-row flex-col lg:px-0 px-4 justify-center lg:gap-6 gap-10 py-10'>
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
                <div className='flex flex-col items-center py-8 lg:px-0 px-6'>
                    <h1 className='text-3xl font-bold pb-2'>Newsletter</h1>
                    <p className='lg:w-[54vw] lg:text-2xl text-lg text-center'>Get 15% off your first purchase! Plus,  be the first to know about sales, new product launches, and exlusive offres!</p>
                    <div className='py-8'>
                        <form action="">
                            <input placeholder='Enter your email' type="text" className='border-2 outline-none rounded-xl lg:w-[30vw] w-[60vw] py-2 px-4 ' />
                            <input type="submit" className='bg-blue-600 py-2 px-6 rounded-xl text-white lg:ml-4 ml-6' value={"Join"} />
                        </form>
                    </div>
                </div>
            </section>





        </>
    );
}
