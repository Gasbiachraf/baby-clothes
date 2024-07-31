
import image1 from "../assets/img/Toolbar.png"
import image2 from "../assets/img/Vector.svg"
import image3 from "../assets/img/image 2.png"
import image from "../assets/img/image 11 (10).png"
import './header.sass'

import React, { useContext, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";






const Header = () => {

    const [product, setProduct, panier, setPanier] = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false);
    const [droppanier, setDroppanier] = useState(false);

    const navigate = useNavigate()

    const MoveToCart = () => {
        setDroppanier(!droppanier)
        navigate('/cart')
    }

    return (
        <div className="">
            <div className='bg-no-repeat bg-cover flex justify-between py-4 text-white' style={{ backgroundImage: `url(${image1})` }}>
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

            <div className=" flex my-6 justify-around items-center max-[430px]:z-50  max-[430px]:top-0 max-[430px]:inset-x-0 bg-alpha py-5 relative">
                <img onClick={() => navigate('/')} src={image3} className="lg:w-32 w-24" alt="" />
                <div
                    className={`flex gap-16 max-[430px]:absolute  max-[430px]:flex-col duration-500 max-[430px]:bg-alpha max-[430px]:inset-x-0 max-[430px]:py-5 ${isOpen ? "max-[430px]:top-20 shadow-lg p-2  bg-white" : "max-[430px]:-top-96"
                        }`}
                >
                    <Link to={"/"} className="cursor-pointer hover:text-teta">Home</Link>
                    <Link to={"/shop"} className="cursor-pointer hover:text-teta">Shop</Link>
                    <Link to={"/cart"} className="cursor-pointer hover:text-teta">Cart
                    </Link>
                    <Link to={"/blog"} className="cursor-pointer hover:text-teta">Blog</Link>
                    <Link to={"/contact"} className="cursor-pointer hover:text-teta">Contact</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <div>
                        <SlBasket onClick={() => setDroppanier(!droppanier)} className="text-xl" />
                    </div>
                    <div className=" border-2  border-full rounded-full flex">
                        <form action="" className="flex items-center gap-4">
                            <input type="text" className="border-none m-1  outline-none pl-2" placeholder="Search" />
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

            <div>
                <div className={droppanier ? "absolute duration-500 bg-blue-600 rounded-xl lg:w-[30vw] lg:h-[70vh] h-[80vh] right-2  lg:ml-0 ml-2  z-10 p-2 overflow-hidden " : "absolute lg:w-[0vw] lg:h-[70vh] h-[80vh]  duration-300  rounded-xl right-2   z-10  "}>
                    <div className={droppanier ? "flex flex-col gap-2  overflow-auto invisible-scrollbar  lg:h-[59vh] h-[65vh] pb-20 " : 'hidden'}>

                        {
                            panier.map((element, id) => <>
                                <div key={id} className="flex gap-4 p-2 border-2 rounded-xl font-bold">
                                    <img className="w-[25%]" src={element.image} alt="" />
                                    <div className="text-xl text-white flex flex-col gap-2">
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

        </div>
    );
};

export default Header;