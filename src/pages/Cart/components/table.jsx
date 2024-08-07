import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../utils/ContextProvider';

import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

export const TableCart = () => {
    const {panier, setPanier} = useContext(MyContext)
    let [quantity, setQuantity] = useState(1)

    const CartAdd = (parames) => {
        let productplus = panier.filter(element => element.id == parames)
        productplus[0].quantitybuy = productplus[0].quantitybuy + 1
        let newPanier = [...panier]
        setPanier(newPanier)

    }
    const CartMinus = (parames) => {
        let productplus = panier.filter(element => element.id == parames)
        console.log(productplus);
        productplus[0].quantitybuy = productplus[0].quantitybuy - 1
        
        let newPanier = [...panier]
        setPanier(newPanier)
        
    }
     const DeleteProduct =(parames)=>{
        let productdelete = panier.filter(element => element.id == parames)
        let productdeleteId = productdelete[0].id
        let productIndex = panier.findIndex(element=>element.id == productdeleteId)
        panier.splice(productIndex , 1 )
        

        let newPanier = [...panier]
        setPanier(newPanier)



     }
  
    return (

        <div id='achraf' class="flex flex-col pt-2 pb-6 ">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="pb-2 inline-block min-w-full sm:px-6 lg:px-0 ">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-gray-200 border-b ">
                                <tr>
                                    <th scope="col" class="text-xl text-center font-medium text-gray-900 px-6 py-4">
                                        Product
                                    </th>
                                    <th scope="col" class="text-xl text-center font-medium text-gray-900 px-6 py-4">
                                    </th>
                                    <th scope="col" class="text-xl text-center font-medium text-gray-900 px-6 py-4">
                                        Price
                                    </th>
                                    <th scope="col" class="text-xl text-center font-medium text-gray-900 px-6 py-4">
                                        Quantity
                                    </th>
                                    <th scope="col" class="text-xl text-center font-medium text-gray-900 px-6 py-4">
                                        Subtotal
                                    </th>
                                    <th scope="col" class="text-xl text-center font-medium text-gray-900 px-6 py-4">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    panier.map((element, id) => <>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 w-[19%]   py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <img className='w-[100%]  0' src={element.image} alt="" />
                                            </td>
                                            <td class="text-lg  w-[25%]  text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                {element.productName}
                                            </td>
                                            <td class="text-lg w-[14%]  text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                ${element.price}.00
                                            </td>
                                            <td class="text-lg w-[14%]  text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                <div className='border-2 border-blue-600 flex  text-xl rounded-xl'>
                                                    <button onClick={() => element.quantitybuy > 1 ? CartMinus(element.id) : 2} className='lg:px-3 px-2 lg:py-2 py-1 text-xl'><AiOutlineMinus /></button>
                                                    <p className='border-x-2 border-blue-600 lg:w-[4vw] w-[10vw] flex justify-center items-center'>
                                                        {/* {product[0].quantitybuy} */}
                                                        {element.quantitybuy}

                                                    </p>
                                                    <button onClick={() => CartAdd(element.id) } className='lg:px-3 px-2 lg:py-2 py-1 text-xl'><GoPlus /></button>
                                                </div>
                                            </td>
                                            <td class="text-lg w-[14%]  text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                $ {element.price * element.quantitybuy}.00
                                            </td>
                                            <td  class="text-lg w-[14%]   m-auto  text-gray-900 font-medium  py-4 whitespace-nowrap">
                                                <button className='w-[100%] py-6 text-3xl flex justify-center' onClick={()=>DeleteProduct(element.id)}><RiDeleteBinLine className='hover:text-slate-400' /></button>
                                            </td>
                                        </tr>
                                    </>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

