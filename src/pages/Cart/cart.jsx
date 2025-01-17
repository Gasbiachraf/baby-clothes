import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../utils/ContextProvider';
import { TableCart } from './components/table';
import { Link, useNavigate } from 'react-router-dom';

export const CartPage = () => {

    const {panier} = useContext(MyContext)
    const navigate = useNavigate()

    let subtotal = 0
    panier.forEach(element => {
        let subsubtotal = element.price * element.quantitybuy;
        subtotal = subtotal + subsubtotal;
    });

    return (
        <section className='flex flex-col items-center'>
            <div className='lg:w-[90%] w-[95%]'>
                <div className='text-2xl pt-10 font-semibold'>
                    <p className='pb-4'>Home /  <span className='text-blue-600 '>Your shopping cart</span></p>
                    <p id='yourcart' className='text-4xl font-bold py-8'>Your Cart</p>
                </div>
                <div className={panier.length == 0 ? "hidden" : "w-[100%]"}>
                    <div className='w-[100%] max-[430px]:overflow-x-scroll'>
                        <TableCart />
                    </div>
                    <div className=" flex lg:flex-row flex-col lg:justify-between items-center lg:py-10 py-4">
                        <div className="flex  gap-4 lg:pb-0 pb-8 max-[430px]:hidden">
                            <form className='flex justify-center lg:w-[30vw]'>
                                <input className='outline-none border-2 rounded-xl lg:w-[100%] pl-4 lg:text-xl  ' placeholder='Coupon code' type="text" />
                            </form>
                            <button className='bg-blue-500 px-6 py-3 rounded-xl text-white lg:text-xl '>Apply</button>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => navigate('/shop')} className='bg-[#EAEAEA] px-6 py-2 rounded-xl lg:text-xl '>Continue Shopping</button>
                            <a href="#yourcart">  <button className='bg-blue-500 px-4 py-2 rounded-xl text-white lg:text-xl '>Update Cart</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex lg:justify-end justify-center lg:w-[100%] w-[90vw]  py-10 lg:pl-0 pl-1 lg:ml-0 ml-2">
                        <div className='border-2 flex flex-col gap-2 rounded-xl lg:w-[48%] p-4'>
                            <p className='text-2xl'>Cart Total</p>
                            <div className='flex lg:gap-72 gap-44  pt-4 text-xl'>
                                <p>Subtotal</p>
                                <p className='font-semibold'>${subtotal}.00</p>
                            </div>
                            <div className='flex lg:gap-80 gap-52 pt-2 text-xl pb-6'>
                                <p>Total</p>
                                <p className='font-semibold'>${subtotal + 20}.00</p>
                            </div>
                            <button onClick={() => navigate('/checkout')} className='bg-[#FFE926] rounded-xl lg:py-6 py-3 text-xl lg:text-2xl   '>Proceed to checkout</button>


                        </div>

                    </div>
                </div>

                <div className={panier.length != 0 ? "hidden mb-10" : ""}>
                    <div class="h-[70vh] w-[100%]   flex items-center">
                        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                            <div class="max-w-md">
                                <div class="text-5xl font-dark font-bold pb-4">Oops! </div>
                                <p
                                    class="text-2xl md:text-3xl font-light leading-normal"
                                >Your cart is currently empty. </p>
                                <p class="mb-8">Please add items to your cart to proceed with your purchase.</p>

                                <Link to={'/shop'}><button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Shop Now</button></Link>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
