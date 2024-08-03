import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
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
import Example from '../Home/components/modal';

export const ProductPage = () => {

    const { product, AddToCard, Heart } = useContext(MyContext)
    const navigate = useNavigate()
    let [quantity, setQuantity] = useState(1)
    let achraf = quantity
    // let [achraf, setAchraf] = useState(0)
    const { idProduct } = useParams();
    const specificProduct = product.filter(element => element.id == idProduct)
    let pproduct = [...product.slice(0, 4)]




    // const arrayPanier = [...panier]
    // const AddToCard = (parames) => {
    //     let productAdd = product.filter(element => element.id == parames)
    //     let questionPanier = panier.filter(element => element.id == parames)
    //     if (questionPanier.length == 0) {
    //         arrayPanier.push(productAdd[0])
    //         setPanier(arrayPanier)
    //     } else {
    //         let productplus = panier.filter(element => element.id == parames)
    //         for (let index = 0; index < quantity ; index++) {
    //             productplus[0].quantitybuy++
    //         }
    //     }
    //     let productClicked = [...productAdd]

    //     setProductmodal(productClicked)
    //     console.log(`${productmodal} here`);
    //     setOpen(true)

    // }






    return (
        <section className='flex flex-col items-center '>
            <div id={specificProduct[0].productName} className='lg:w-[86%] w-[95vw]  '>
                <div className='text-2xl py-10 font-semibold'>
                    <p>Home / <span className='text-blue-600'>{specificProduct[0].productName}</span></p>
                </div>
                <div className='flex lg:gap-16 gap:6 lg:flex-row flex-col  lg:w-[100%] pt-6 lg:pb-24 pb-4 lg:pl-0 pl-1'>
                    {/* left side */}
                    <div className='lg:w-[100%] w-[90vw]  flex flex-col'>
                        <img className='lg:w-[100%] ' src={specificProduct[0].image} alt="" />
                        <div className='flex justify-between lg:w-[100%] lg:pt-12 pt-4'>
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
                            <p className='py-4 text-xl max-[430px]:hidden'>{specificProduct[0].description} <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis soluta aliquid ex quo blanditiis</span></p>
                            <div className='flex gap-4 text-xl items-center py-4'>
                                <p className='p-0 m-0'>Share this:</p>
                                <AiFillInstagram className='text-3xl mt-1 text-[#7F7F7F]' />
                                <AiFillTwitterCircle className='text-3xl mt-1 text-[#7F7F7F]' />
                                <FaFacebook className='text-3xl mt-1 text-[#7F7F7F]' />
                                <FaPinterest className='text-3xl mt-1 text-[#7F7F7F]' />
                            </div>
                            <div className=' flex lg:pt-4 gap-4 pb-10'>
                                <div className='border-2 border-blue-600 flex  text-xl rounded-xl '>
                                    <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : 1} className='lg:px-4 px-2 lg:py-2 py-1 lg:text-2xl'><AiOutlineMinus /></button>
                                    <p className='border-x-2 border-blue-600 lg:w-[5vw] w-[6vw]  flex justify-center items-center '>
                                        {quantity}
                                    </p>
                                    <button onClick={() => setQuantity(quantity + 1)} className='lg:px-4 px-2 lg:py-2 py-1 lg:text-2xl'><GoPlus /></button>
                                </div>
                                <div onClick={() => AddToCard(specificProduct[0].id)} className='flex items-center lg:gap-4 gap-2  cursor-pointer bg-blue-500 rounded-xl text-white lg:px-4 px-2 lg:py-2 py-1'>
                                    <SlBasket className='lg:text-2xl ' />
                                    <p>Add to card</p>
                                </div>

                                <div className='border rounded-xl px-4 flex items-center'>
                                    <button onClick={() => Heart(specificProduct[0])}>{!specificProduct[0].heart ? <FaRegHeart className='text-2xl cursor-pointer' /> : <FaHeart className='text-2xl text-red-600 cursor-pointer' />}</button>
                                </div>
                                <div className='border rounded-xl px-4 py-2'>
                                    <TbExchange className='lg:text-3xl text-2xl rotate-90' />
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
                            <div className='border flex flex-col gap-4 py-2 px-4 rounded-2xl lg:mt-14 mt-4'>
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
                <div className='border rounded-2xl lg:py-6 py-4 lg:px-20  px-2 ml-1'>
                    <div className='flex justify-center gap-10 text-2xl'>
                        <p className='border-b-2 border-blue-600 pb-2'>Description </p>
                        <p>Reviews(Nbr)</p>
                    </div>
                    <div className='pt-12 text-xl'>
                        <p className='pb-4'>{specificProduct[0].description}</p>
                        <p className='max-[430px]:hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptas id esse nostrum enim itaque atque molestias reprehenderit quis a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, ipsum. </p>
                    </div>
                </div>
                <div className='lg:py-16 py-4 flex flex-col'>
                    <h1 className='text-3xl lg:pt-0 py-2 font-semibold text-center'>Related Products</h1>
                    <div className='flex flex-wrap  lg:gap-4 gap-8 lg:py-10 py-4 lg:pl-0 pl-8'>
                        {
                            pproduct.map((element, id) =>
                                <>
                                    <a>
                                        <div >
                                            <div className=' rounded-lg  lg:w-[20vw] w-[80vw]   relative'  >
                                                <div className='absolute right-3  top-3 text-gray-400 '>
                                                    <div className='flex flex-col gap-2'>
                                                    <button onClick={() => Heart(element)}>{!element.heart ? <FaRegHeart className='text-2xl cursor-pointer' /> : <FaHeart className='text-2xl text-red-600 cursor-pointer' />}</button>
                                                    <button onClick={() => AddToCard(element.id)}><SlBasket className='text-2xl  z-20' /> </button><Example />
                                                    </div>
                                                </div>
                                                <div className='absolute left-2 top-2'>
                                                    <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-sm text-white font-semibold" : "hidden "}>SALE</p>
                                                </div>
                                                <img className='lg:w-[20vw] w-[80vw]' src={element.image} alt="" />
                                                <p className='lg:pt-4 pt-1 font-medium text-xl'>{element.productName}</p>
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

