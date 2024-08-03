
import { useContext, useState } from 'react';
import './firstSection.sass'

import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbExchange } from "react-icons/tb";

import image1 from "../../../assets/img/refresh_major.svg"
// import image2 from "../../../assets/img/"

import { FaPlus } from "react-icons/fa6";
import { MyContext } from '../../../utils/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Example from '../../Home/components/modal';





export const FirstSectionShop = () => {
    const { product, AddToCard, Heart } = useContext(MyContext)
    // const [product, setProduct, panier, setPanier, AddToCard] = useContext(MyContext)
    const [shopbydefault, setShopbydefault] = useState(true)
    const navigate = useNavigate()

    const productrate5 = product.filter(element => (element.rate == 5 && element.category == "sale"))
    let pproduct = [...productrate5.slice(0, 3)]

    const [toysCategory, setToysCategory] = useState([
        {
            toysname: "Playsets"
        },
        {
            toysname: "Control Toys"
        },
        {
            toysname: "Educational Toys"
        },
        {
            toysname: "Eco-Friendly Toys"
        },
        {
            toysname: "Stuffed Toys"
        },
        {
            toysname: "Type 1"
        },
        {
            toysname: "Type 2"
        },
    ])

    let [toysfilter, setToysfilter] = useState("Educational Toys")
    return (
        <>
            <section>
                <div className='py-10'>
                    <h1 className='text-2xl font-medium lg:pl-20 pl-2'>Home /<span className='text-blue-600 pl-2 text-2xl'>Products</span></h1>
                </div>
                <div className='flex justify-center pb-10'>
                    <div className='w-[90vw]  flex lg:gap-16 lg:flex-row flex-col'>
                        <div className='lg:w-[25%] w-[100%] flex flex-col gap-4 lg:p-0 px-4'>
                            <div className='px-3 pb-6 flex flex-col gap-4 border rounded-2xl'>
                                <h1 className='text-2xl pt-6 pb-4'>Product categories</h1>
                                {
                                    toysCategory.map((element) => <>
                                        <div onClick={() => setToysfilter(element.toysname)} className='flex gap-2 items-center text-xl pb-2 cursor-pointer'>
                                            <FaPlus />
                                            <p className=''>{element.toysname} </p>
                                        </div>
                                    </>)
                                }
                            </div>
                            <div className='px-3 py-6 flex flex-col gap-4 border rounded-2xl max-[430px]:hidden '>
                                <h1 className='text-2xl '>Filter by price</h1>
                                <form >
                                    <input type="range" className='lg:w-[100%] ' />
                                    <div className='flex justify-between font-semibold'>
                                        <p>$20.00</p>
                                        <p>$200.00</p>
                                    </div>
                                </form>
                                <div className='flex justify-end'>
                                    <button className='bg-blue-600 w-[50%] rounded-lg py-2 text-xl text-white '>Apply</button>
                                </div>
                            </div>
                            <div className='px-3 py-6 flex flex-col gap-4 border rounded-2xl  max-[430px]:hidden'>
                                <h1 className='text-2xl '>Popular products</h1>
                                {
                                    pproduct.map((element) => <>

                                        <div className='flex items-center gap-2'>
                                            <img onClick={() => { navigate(`/product/${element.id}`) }} className='lg:w-[35%] cursor-pointer' src={element.image} alt="" />
                                            <div className='flex flex-col '>
                                                <p className='text-lg font-semibold'>{element.productName}</p>
                                                <p className='font-bold text-xl'>${element.price}.00</p>
                                                <div className=' flex gap-1 pt-2'>
                                                    {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                    {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                    {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                    {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                    {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                </div>

                                            </div>
                                        </div>

                                    </>)
                                }

                            </div>
                        </div>
                        <div className='lg:w-[75%] lg:p-0 px-4 pt-8'>
                            <h1 className='text-3xl font-bold'>{toysfilter}</h1>
                            <div className='flex justify-between pt-6'>
                                <div className='flex gap-4 items-center max-[430px]:hidden '>
                                    <CgMenuGridR onClick={() => setShopbydefault(true)} className={`${shopbydefault ? "text-3xl text-blue-600 " : "text-3xl"} cursor-pointer`} />
                                    <TfiMenuAlt onClick={() => setShopbydefault(false)} className={`${!shopbydefault ? "text-3xl text-blue-600 " : "text-3xl"} cursor-pointer`} />

                                </div>
                                <div>

                                    <p className='lg:pr-4 font-semibold text-xl'>Showing 1-9 of 24 results</p>

                                </div>


                            </div>
                            <div className={shopbydefault ? "flex flex-wrap lg:pl-0 pl-2  lg:gap-6 gap-8 py-10" : "flex flex-col  gap-8 py-10"}>
                                {
                                    product.map((element, id) =>
                                        <>
                                            <div key={id} className={shopbydefault ? (element.toytype == toysfilter ? "" : "hidden") : "hidden"}>
                                                <div className=' rounded-lg  lg:w-[20vw] w-[80vw]  relative'  >
                                                    <div className='absolute right-3  top-3 text-gray-400 '>
                                                        <div className='flex flex-col gap-2'>
                                                            <button onClick={() => Heart(element)}>{!element.heart ? <FaRegHeart className='text-2xl cursor-pointer' /> : <FaHeart className='text-2xl text-red-600 cursor-pointer' />}</button>
                                                            <button><SlBasket onClick={() => AddToCard(element.id)} className='text-2xl' /> <Example /></button>
                                                        </div>
                                                    </div>
                                                    <div className='absolute left-2 top-2'>
                                                        <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 px-4 text-white text-sm font-semibold" : "hidden "}>SALE</p>
                                                    </div>
                                                    <img onClick={() => { navigate(`/product/${element.id}`) }} className='lg:w-[20vw]  w-[80vw]' src={element.image} alt="" />
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
                                            <div className={!shopbydefault ? (element.toytype == toysfilter ? " max-[430px]:hidden" : "hidden ") : "hidden"}>
                                                <div className='flex gap-6 relative'>
                                                    <div className='absolute left-3 top-3'>
                                                        <p className={element.category == "sale" ? "block bg-red-400 rounded-full py-1 text-sm px-3 text-white font-semibold" : "hidden "}>SALE</p>
                                                    </div>
                                                    <img onClick={() => { navigate(`/product/${element.id}`) }} className='lg:w-[20vw] cursor-pointer lg:h-[38vh]' src={element.image} alt="" />
                                                    <div className='flex flex-col'>
                                                        <h1 onClick={() => { navigate(`/product/${element.id}`) }} className='text-2xl cursor-pointer font-semibold pb-2'>{element.productName}</h1>
                                                        <p className='pb-4'>{element.description}</p>
                                                        <p className={element.oldprice != 0 ? "text-green-500 text-xl" : "text-black text-xl"}>${element.price}.00 <span className={element.oldprice == 0 ? "hidden" : "text-black line-through text-base"}>${element.oldprice}.00</span></p>
                                                        <div className='pt-4 flex gap-1'>
                                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                            {element.rate == 0 ? <CiStar className='text-yellow-400 text-2xl' /> : <FaStar className='text-yellow-400 text-xl' />}
                                                        </div>
                                                        <div className=' flex pt-4 gap-4'>
                                                            <button onClick={() => AddToCard(element.id)
                                                            } className='flex items-center gap-4 cursor-pointer bg-blue-500 rounded-xl text-white px-4 py-2'>
                                                                <SlBasket className='text-2xl' />
                                                                <p>Add to card </p>

                                                            </button>
                                                            <Example />
                                                            <div className='border rounded-xl px-4 py-2'>
                                                                <button onClick={() => Heart(element)}>{!element.heart ? <FaRegHeart className='text-2xl cursor-pointer' /> : <FaHeart className='text-2xl text-red-600 cursor-pointer' />}</button>

                                                            </div>
                                                            <div className='border rounded-xl px-4 py-2'>
                                                                <TbExchange className='text-3xl rotate-90' />
                                                                {/* <img className='flex items-center' src={image1} alt="" /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            {/* <div className='flex justify-center gap-4 pb-16'>
                                <div className='border rounded-full text-2xl p-2 flex justify-center items-center'><IoIosArrowBack /></div>
                                <div className='border rounded-full text-2xl px-4 py-1 bg-blue-700 text-white'>1</div>
                                <div className='border rounded-full text-2xl px-4 py-1'>2</div>
                                <div className='border rounded-full text-2xl px-4 py-1'>3</div>
                                <div className='border rounded-full text-2xl p-2 flex justify-center items-center'><IoIosArrowForward /></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
