
import image1 from "../assets/img/Toolbar.png"
import image2 from "../assets/img/Vector.svg"
import image3 from "../assets/img/image 2.png"
import image from "../assets/img/image 11 (10).png"
import './header.sass'

import React, { useContext, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";






const Header = () => {

    const { product, setProduct, panier, setPanier, AddToCard, open, setOpen, productmodal, setProductmodal, Heart } = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false);
    const [droppanier, setDroppanier] = useState(false);

    const navigate = useNavigate()

    const MoveToCart = () => {
        setDroppanier(!droppanier)
        navigate('/cart')
    }


    let location = useLocation()

    let widwindow = 

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])


    return (
        <div className="">
            <div className='bg-no-repeat bg-cover flex justify-between py-4 text-white max-[430px]:hidden' style={{ backgroundImage: `url(${image1})` }}>
                <div className='gap-10 flex items-center lg:pl-20'>
                    <img src={image2} alt="" />
                    <p>Free  free shipping with over $150</p>
                </div>
                <div className='gap-10 flex items-center lg:pr-24'>
                    <p>Login</p>
                    <p>Register</p>

                </div>
            </div>

            {/* navbar  */}

            <div className=" flex my-6 justify-around items-center max-[430px]:z-50  max-[430px]:top-0 max-[430px]:inset-x-0 bg-alpha  relative">
                <img onClick={() => navigate('/')} src={image3} className="lg:w-32 w-24 cursor-pointer" alt="" />
                <div
                    className={`flex lg:gap-16 lg:px-0 px-4 gap-4 max-[430px]:absolute  max-[430px]:flex-col duration-500 max-[430px]:bg-alpha max-[430px]:inset-x-0 max-[430px]:py-2 ${isOpen ? " mt-72 duration-500  shadow-lg p-2  bg-white " : "max-[430px]:hidden  "
                        }`}
                >
                    <Link onClick={()=>window.screen.width <= 430 ? setIsOpen(!isOpen) : ""}  to={"/"} className="cursor-pointer hover:text-teta text-lg font-semibold">Home</Link>
                    <Link onClick={()=>window.screen.width <= 430 ? setIsOpen(!isOpen) : ""}  to={"/shop"} className="cursor-pointer hover:text-teta text-lg font-semibold">Shop</Link>
                    <Link onClick={()=>window.screen.width <= 430 ? setIsOpen(!isOpen) : ""} to={"/contact"} className="cursor-pointer hover:text-teta text-lg font-semibold">Contact</Link>
                    <Link onClick={()=>window.screen.width <= 430 ? setIsOpen(!isOpen) : ""} to={"/blog"} className="cursor-pointer hover:text-teta text-lg font-semibold">Blog</Link>
                    <Link onClick={()=>window.screen.width <= 430 ? setIsOpen(!isOpen) : ""} to={"/faq"} className="cursor-pointer hover:text-teta text-lg font-semibold">FAQ's</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <div onClick={() => setDroppanier(!droppanier)} className="relative cursor-pointer">
                        <p className="absolute bg-yellow-500 rounded-full px-1 text-xs top-0 right-0  ">{panier.length}</p>
                        <SlBasket className="text-3xl px-1" />
                    </div>
                    <div className=" border-2 max-[430px]:w-[45vw]  border-full rounded-full flex">
                        <form action="" className="flex items-center  lg:gap-4">
                            <input type="text" className="border-none m-1 max-[430px]:w-[100%]  outline-none pl-2" placeholder="Search" />
                            <div className="bg-blue-600 rounded-full p-2">
                                <IoSearchOutline className="text-xl text-white " />
                            </div>
                        </form>
                    </div>
                </div>

                {isOpen ? (
                    <MdClose
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        className="hidden max-[430px]:flex text-2xl z-50"
                    />
                ) : (
                    <TbMenu2
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        className="hidden max-[430px]:flex  text-2xl z-50"
                    />
                )}
            </div>

            <div className="">
                <div className={droppanier ? "absolute duration-300 bg-blue-600 rounded-xl lg:w-[26vw] w-[96vw] lg:h-[79vh] h-[84vh] right-2 top-0 lg:mt-32 mt-20  lg:ml-0 ml-2  z-30 p-2 overflow-hidden " : "absolute lg:w-[0vw] lg:h-[80vh] h-[84vh]  duration-300 top-0 lg:mt-40 mt-20 rounded-xl right-2   z-30  "}>
                    <div className={droppanier ? "flex flex-col gap-2  overflow-auto invisible-scrollbar  lg:h-[68vh] h-[70vh] pb-20 border-b-2" : 'hidden'}>

                        {
                            panier.map((element, id) => <>
                                <div key={id} className="flex gap-4 p-2 border-2 rounded-xl font-bold">
                                    <img className="w-[25%]" src={element.image} alt="" />
                                    <div className="text-lg text-white flex flex-col gap-2">
                                        <p>{element.productName}</p>
                                        <p>$ {element.price}.00 </p>
                                        <p>X {element.quantitybuy}</p>
                                    </div>
                                </div></>)
                        }
                        {/* <div className="flex gap-4 p-2 border-2 rounded-xl">
                            <img className="w-[25%]" src={image} alt="" />
                            <div className="text-xl text-white flex flex-col gap-2">
                                <p>smiat lmantouj </p>
                                <p>$ 29.00 </p>
                                <p>X 5</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-2 border-2 rounded-xl">
                            <img className="w-[25%]" src={image} alt="" />
                            <div className="text-xl text-white flex flex-col gap-2">
                                <p>smiat lmantouj </p>
                                <p>$ 29.00 </p>
                                <p>X 5</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-2 border-2 rounded-xl">
                            <img className="w-[25%]" src={image} alt="" />
                            <div className="text-xl text-white flex flex-col gap-2">
                                <p>smiat lmantouj </p>
                                <p>$ 29.00 </p>
                                <p>X 5</p>
                            </div>
                        </div>            */}
                    </div>

                    <div className={droppanier ? "absolute w-[100%] bottom-2  flex   gap-4  text-xl text-white font-bold" : "hidden"}>
                        <button onClick={() => MoveToCart()} className="w-[45%] border-2  py-2 rounded-xl ">View cart</button>
                        <button onClick={() => setDroppanier(!droppanier)} className="w-[45%] border-2  py-2 rounded-xl ">Close</button>
                    </div>
                </div>
            </div>


            {/* navbar  */}

            <div onClick={()=>window.scrollTo({top:0 , behavior :"smooth"})} className="fixed cursor-pointer rounded-full p-4 bg-[#0F83B2] text-white right-4 bottom-4 z-20"> 
            <FaArrowUp />

            </div>

        </div>
    );
};

export default Header;