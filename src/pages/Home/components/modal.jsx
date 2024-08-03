

import { useContext, useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { MyContext } from '../../../utils/ContextProvider'

export default function Example() {
    const { open, setOpen, productmodal} = useContext(MyContext)
    
    

    return (
        <div className={open ? "relative z-10 bg-slate-500" : "hidden"}>
            <div
                transition
                className="fixed inset-0 bg-black  bg-opacity-5 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex items-center  lg:h-[20vh]   ">
                                <div className="">
                                    <img className='lg:w-[10vw] w-[30vw]'  src={productmodal.length != 0 ? productmodal[0].image : ""} alt="" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    
                                    <div className=" flex flex-col items-center lg:pl-0 pl-4">
                                        <p className="lg:text-2xl text-lg  lg:pb-4 text-black">
                                            {productmodal.length != 0 ? `${productmodal[0].productName} ${productmodal[0].id} ` : ""}
                                        </p>
                                        <p className='lg:text-xl text-lg font-semibold text-green-500'>Add to cart successfully</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 lg:py-3 pb-12 pt-4 sm:flex sm:flex-row-reverse sm:px-6 max-[430px]:relative">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto max-[430px]:w-[20vw] max-[430px]:absolute max-[430px]:right-4"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
