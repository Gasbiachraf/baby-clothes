import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import image1 from "../../../src/assets/img/Visa.png"
import image2 from "../../../src/assets/img/MasterCard.png"
import image3 from "../../../src/assets/img/American Express.png"
import image4 from "../../../src/assets/img/Discover Card.png"
import image5 from "../../../src/assets/img/UnionPay.png"

import { MyContext } from '../../utils/ContextProvider';

export const ProductPage = () => {

    const [product , setProduct , panier , setPanier] = useContext(MyContext)
    const navigate = useNavigate()
    let [quantity, setQuantity] = useState(1)
    // let [achraf, setAchraf] = useState(0)
    const { idProduct } = useParams();
    const specificProduct = product.filter(element => element.id == idProduct)
    let pproduct = [...product.slice(0, 4)]






    return (
        <section className='flex flex-col items-center'>
            <div id={specificProduct[0].productName} className='lg:w-[86%]'>
                <div className='text-2xl py-10 font-semibold'>
                    <p>Home / <span className='text-blue-600'>{specificProduct[0].productName}</span></p>
                </div>
                <div className='flex gap-16  lg:w-[100%] pt-6 pb-24'>
                    {/* left side */}
                    <div className='lg:w-[100%] flex flex-col'>
                        <img className='lg:w-[100%] ' src={specificProduct[0].image} alt="" />
                        <div className='flex justify-between lg:w-[100%] pt-12'>
                            <img className='w-[30%]' src={specificProduct[0].image} alt="" />
                            <img className='w-[30%]' src={specificProduct[0].image} alt="" />
                            <img className='w-[30%]' src={specificProduct[0].image} alt="" />
                        </div>
                    </div>
                    {/* right side */}
                    <div className='lg:w-[100%]'>
                        <div className='flex flex-col lg:w-[100%]'>
                            <h1 className='text-3xl font-semibold pb-3'>{specificProduct[0].productName}</h1>
                            <p className={specificProduct[0].oldprice != 0 ? "text-green-500 text-3xl font-bold py-2" : "text-black text-3xl py-2"}>${specificProduct[0].price}.00 <span className={specificProduct[0].oldprice == 0 ? "hidden" : "text-black line-through text-lg py-2"}>${specificProduct[0].oldprice}.00</span></p>
                            <div className='pt-4 flex gap-1'>
                                {specificProduct[0].rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                {specificProduct[0].rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                {specificProduct[0].rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                {specificProduct[0].rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                {specificProduct[0].rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                            </div>
                            <p className='py-4 text-xl'>{specificProduct[0].description} <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis soluta aliquid ex quo blanditiis</span></p>
                            <div className='flex gap-4 text-xl items-center py-4'>
                                <p className='p-0 m-0'>Share this:</p>
                                <AiFillInstagram className='text-3xl mt-1 text-[#7F7F7F]' />
                                <AiFillTwitterCircle className='text-3xl mt-1 text-[#7F7F7F]' />
                                <FaFacebook className='text-3xl mt-1 text-[#7F7F7F]' />
                                <FaPinterest className='text-3xl mt-1 text-[#7F7F7F]' />
                            </div>
                            <div className=' flex pt-4 gap-4 pb-10'>
                                <div className='border-2 border-blue-600 flex  text-xl rounded-xl'>
                                    <button onClick={() => quantity > 0 ? setQuantity(quantity - 1) : 1} className='px-4 py-2 text-2xl'><AiOutlineMinus /></button>
                                    <p className='border-x-2 border-blue-600 lg:w-[10vh] flex justify-center items-center'>
                                        {quantity}
                                    </p>
                                    <button onClick={() => setQuantity(quantity + 1)} className='px-4 py-2 text-2xl'><GoPlus /></button>
                                </div>
                                <div className='flex items-center gap-4 bg-blue-500 rounded-xl text-white px-4 py-2'>
                                    <SlBasket className='text-2xl' />
                                    <p>Add to card</p>
                                </div>
                                <div className='border rounded-xl px-4 py-2'>
                                    <CiHeart className='text-3xl' />
                                </div>
                                <div className='border rounded-xl px-4 py-2'>
                                    <TbExchange className='text-3xl rotate-90' />
                                    {/* <img className='flex items-center' src={image1} alt="" /> */}
                                </div>
                            </div>
                            <div className='border flex flex-col gap-4 py-2 px-4 rounded-2xl'>
                                <h1 className='text-xl font-semibold'>Short description</h1>
                                <div className='flex   justify-between  text-xl'>
                                    <div className='flex flex-col gap-4'>
                                        <p>SKU : BG-106{specificProduct[0].id}</p>
                                        <p>Tags : 2 -5 years </p>
                                    </div>
                                    <div className='flex  flex-col gap-4 lg:pr-8 '>
                                        <p>category : {specificProduct[0].category} </p>
                                        <p>EXP : 29/07/2026</p>
                                    </div>
                                </div>
                            </div>
                            <div className='border flex flex-col gap-4 py-2 px-4 rounded-2xl mt-14'>
                                <h1 className='text-xl font-semibold'>Guaranteed Safe Checkout</h1>
                                <div className='flex gap-4'>
                                    <img src={image1} alt="" />
                                    <img src={image2} alt="" />
                                    <img src={image3} alt="" />
                                    <img src={image4} alt="" />
                                    <img src={image5} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-2xl py-6 lg:px-20 '>
                    <div className='flex justify-center gap-10 text-2xl'>
                        <p className='border-b-2 border-blue-600 pb-2'>Description </p>
                        <p>Reviews(Nbr)</p>
                    </div>
                    <div className='pt-12 text-xl'>
                        <p className='pb-4'>{specificProduct[0].description}</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptas id esse nostrum enim itaque atque molestias reprehenderit quis a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, ipsum. </p>
                    </div>
                </div>
                <div className='py-16 flex flex-col'>
                    <h1 className='text-3xl font-semibold text-center'>Related Products</h1>
                    <div className='flex flex-wrap  gap-4 py-10'>
                        {
                            pproduct.map((element, id) =>
                                <>
                                    <a href={`#${specificProduct[0].productName}`}>
                                        <div onClick={() => { navigate(`/product/${element.id}`) }}>
                                            <div className=' rounded-lg  lg:w-[20vw]  relative'  >
                                                <div className='absolute right-3  top-3 text-gray-400 '>
                                                    <div className='flex flex-col gap-2'>
                                                        <CiHeart className='text-3xl' />
                                                        <SlBasket className='text-2xl' />
                                                    </div>
                                                </div>
                                                <div className='absolute left-2 top-2'>
                                                    <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-sm text-white font-semibold" : "hidden "}>SALE</p>
                                                </div>
                                                <img className='lg:w-[20vw]' src={element.image} alt="" />
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
                                    </a >
                                </>
                            )
                        }
                    </div>

                </div>

            </div>
        </section >
    );
};

