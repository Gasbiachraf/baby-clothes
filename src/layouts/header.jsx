
import image1 from "../assets/img/Toolbar.png"
import image2 from "../assets/img/Vector.svg"
import image3 from "../assets/img/image 2.png"

import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";




const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
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

            <div className="flex my-6 justify-around items-center max-[430px]:z-50  max-[430px]:top-0 max-[430px]:inset-x-0 bg-alpha py-5 relative">
                <img src={image3} className="lg:w-32 w-24" alt="" />
                <div
                    className={`flex gap-16 max-[430px]:absolute  max-[430px]:flex-col duration-500 max-[430px]:bg-alpha max-[430px]:inset-x-0 max-[430px]:py-5 ${isOpen ? "max-[430px]:top-20 shadow-lg p-2  bg-white" : "max-[430px]:-top-96"
                        }`}
                >
                    <p className="cursor-pointer hover:text-teta">Home</p>
                    <p className="cursor-pointer hover:text-teta">Shop</p>
                    <p className="cursor-pointer hover:text-teta">Pages</p>
                    <p className="cursor-pointer hover:text-teta">Blog</p>
                    <p className="cursor-pointer hover:text-teta">Contact</p>
                </div>
                <div className="flex gap-4 items-center">
                    <div>
                        <SlBasket className="text-xl" />
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



            {/* navbar  */}

        </div>
    );
};

export default Header;