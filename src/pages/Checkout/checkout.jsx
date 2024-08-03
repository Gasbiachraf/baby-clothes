import React, { useContext } from 'react';

import image1 from "../../../src/assets/img/Visa.png"
import image2 from "../../../src/assets/img/MasterCard.png"
import image3 from "../../../src/assets/img/American Express.png"
import image4 from "../../../src/assets/img/Discover Card.png"
import image5 from "../../../src/assets/img/UnionPay.png"
import { MyContext } from '../../utils/ContextProvider';

export const CheckoutPage = () => {
    const {panier} = useContext(MyContext)

    let subtotal = 0
    panier.forEach(element => {
        let subsubtotal = element.price * element.quantitybuy;
        subtotal = subtotal + subsubtotal;
    });

    return (

        <section className='flex justify-center'>
            <div className='lg:w-[88%] w-[95vw] '>
                <div className='lg:text-2xl text-xl py-10 font-semibold'>
                    <p>Home / <span className='text-blue-600'>Checkout</span></p>
                </div>
                <h1 className='text-2xl lg:text-4xl  font-semibold pb-10'>Check out</h1>
                <div className='flex lg:flex-row flex-col-reverse lg:gap-20 gap-8 pb-16'>
                    {/* left side */}
                    <div className="flex flex-col lg:gap-10 gap-8 lg:w-[55%] sm:w-[100%]">
                        <div className='w-[100%] flex flex-col gap-4 border rounded-3xl  px-4 py-6'>
                            <h1 className='text-3xl font-semibold pb-2'>Delivery info</h1>
                            <form className='flex flex-col lg:text-xl text-lg gap-4'>
                                <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 ">
                                    <div className='w-[100%]'>
                                        <label className='lg:text-xl text-lg'>First name*</label>
                                        <input placeholder='Join' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="text" />
                                    </div>
                                    <div className='w-[100%]'>
                                        <label className='lg:text-xl text-lg'>Last name*</label>
                                        <input placeholder='Gray' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="text" />
                                    </div>
                                </div>
                                <div className='w-[100%]'>
                                    <label className='lg:text-xl text-lg'>Street address*</label>
                                    <input placeholder='Address' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="text" />
                                </div>
                                <div className="flex lg:flex-row flex-col lg:gap-8 gap-4  ">
                                    <div className='w-[100%]'>
                                        <label className='lg:text-xl text-lg'>Town / City*</label>
                                        <select className='outline-none pl-2 w-[100%] border-2 border-gray-200 text-gray-400 rounded-xl py-2 mt-2' name="" id="">
                                            <option disabled selected value="City" >City</option>
                                            <option value="City" >Casablanca</option>
                                        </select>
                                    </div>
                                    <div className='w-[100%]'>
                                        <label className='lg:text-xl text-lg'>State*</label>
                                        <select className='outline-none pl-2 w-[100%] border-2 border-gray-200 text-gray-400 rounded-xl py-2 mt-2' name="" id="">
                                            <option disabled selected value="City" >State</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 ">
                                    <div className='w-[100%]'>
                                        <label className='lg:text-xl text-lg'>Zip code*</label>
                                        <input placeholder='Zip code' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="number" />
                                    </div>
                                    <div className='w-[100%]'>
                                        <label className='lg:text-xl text-lg'>Phone*</label>
                                        <input placeholder='(1234) 456-7868' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="number" />
                                    </div>
                                </div>
                                <div className='w-[100%]'>
                                    <label className='lg:text-xl text-lg'>Email  address*</label>
                                    <input placeholder='example@youremail.com' className='outline-none pl-2 w-[100%] border-2 rounded-xl py-2 mt-2' type="email" />
                                </div>
                                <div className='w-[100%]'>
                                    <label className='lg:text-xl text-lg'>Order note (optional)*</label>
                                    <textarea placeholder='Notes about your order, e.g.special notes for delivery.' className='outline-none pl-2 w-[100%] h-[20vh] border-2 rounded-xl py-2 mt-2' type="email" />
                                </div>
                            </form>
                        </div>
                        <div className='w-[100%] flex flex-col  border rounded-3xl  px-4 py-6'>
                            <div>
                                <h1 className='lg:text-3xl text-2xl font-semibold '>Payment</h1>
                                <p className='text-xl pb-10 pt-2'>All transactions are secure and encryted.</p>
                            </div>
                            <div className='flex lg:items-center justify-between lg:flex-row flex-col w-[100%]'>
                                <form>
                                    <input defaultChecked className='text-4xl' type="radio" />
                                    <label className='pl-3 text-xl' htmlFor="">Credit card</label>
                                </form>
                                <div className='flex gap-4 lg:pt-0 py-2 lg:pr-10'>
                                    <img className='lg:w-[3vw] sm:w-[5vw]' src={image1} alt="" />
                                    <img className='lg:w-[3vw] sm:w-[5vw]' src={image2} alt="" />
                                    <img className='lg:w-[3vw] sm:w-[5vw]' src={image3} alt="" />
                                    <img className='lg:w-[3vw] sm:w-[5vw]' src={image4} alt="" />
                                    <img className='lg:w-[3vw] sm:w-[5vw]' src={image5} alt="" />
                                </div>

                            </div>
                            <div className='pr-10 pt-4'>
                                <hr />
                            </div>
                            <form className='flex flex-col lg:text-xl text-lg gap-2'>

                                <div className='w-[100%]'>
                                    <input placeholder='Card number' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="number" />
                                </div>
                                <div className='w-[100%]'>

                                    <input placeholder='Name on card' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="text" />
                                </div>
                                <div className="flex lg:flex-row flex-col lg:gap-8 gap-2 pb-2 ">
                                    <div className='lg:w-[100%] sm:w-[100%]'>

                                        <input placeholder='Expiration date (MM/YY)' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="number" />
                                    </div>
                                    <div className='lg:w-[80%] sm:w-[100%]'>

                                        <input placeholder='Security code' className='outline-none pl-2 w-[100%] border-2 border-gray-200 rounded-xl py-2 mt-2' type="number" />
                                    </div>
                                </div>

                                <div className='w-[100%] flex gap-4 pt-4'>
                                    <input checked className='lg:w-[3%] w-[5%]' type="checkbox" />
                                    <label className='lg:text-xl text-lg'>Use shipping address as billing address</label>
                                </div>
                                <div className='w-[100%] flex gap-4 pb-8'>
                                    <input className='lg:w-[3%] w-[5%]' type="checkbox" />
                                    <label className='text-lg lg:text-xl  text-blue-500 font-bold'>PayPAL</label>
                                </div>
                                <button className='text-white bg-blue-600 py-3 rounded-xl'>Place order</button>
                            </form>



                        </div>
                    </div>
                    {/* right side */}
                    <div className="flex flex-col lg:w-[45%] sm:w-[100%]">
                        <div className="w-[100%] flex flex-col gap-4 border rounded-3xl  px-4 py-6">
                            <h1 className='text-3xl font-semibold pb-2'>Your order</h1>
                            {panier.map((element, id) => <>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-4 items-center'>
                                            <img className='w-[25%]' src={element.image} alt="" />
                                            <div className='flex flex-col gap-2'>
                                                <p className='text-xl font-semibold'>{element.productName}</p>
                                                <p>Amount : {element.quantitybuy}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-semibold'>${element.quantitybuy*element.price}.00</p>
                                        </div>
                                        
                                    </div>
                                    <hr />
                            </>)}
                            <div className='flex flex-col gap-4 py-4 font-semibold text-lg'>
                                <div className="flex justify-between">
                                    <p >Subtotal</p>
                                    <p >${subtotal}.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p >Shipping</p>
                                    <p >$20.00</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold text-lg py-4">
                                    <p >Total</p>
                                    <p >${subtotal +20}.00</p>
                                </div>
                        </div>


                    </div>

                </div>
            </div>

        </section>
    );
};

