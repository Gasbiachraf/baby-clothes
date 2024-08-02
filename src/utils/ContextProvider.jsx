
import React, { createContext, useState } from "react"
import product1 from "../assets/img/image 11.png"
import product2 from "../assets/img/image 11 (1).png"
import product3 from "../assets/img/image 11 (2).png"
import product4 from "../assets/img/image 11 (3).png"
import product5 from "../assets/img/image 11 (4).png"
import product6 from "../assets/img/image 11 (5).png"
import product7 from "../assets/img/image 11 (6).png"
import product8 from "../assets/img/image 11 (7).png"
import product9 from "../assets/img/image 11 (9).png"
import product10 from "../assets/img/image 11 (10).png"
import product11 from "../assets/img/image 11 (11).png"
import product12 from "../assets/img/image 11 (12).png"
import product13 from "../assets/img/image 11 (13).png"
import product14 from "../assets/img/image 11 (14).png"
import product15 from "../assets/img/image 11 (15).png"
import product16 from "../assets/img/image 11 (16).png"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    // ^^ database creation :

    const [product, setProduct] = useState([
        {
            id: 1,
            productName: "Blocks shape-sorting Toy",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Educational Toys",
            image: product1,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 2,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Educational Toys",
            image: product2,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 3,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39,
            oldprice: 0,
            category: "",
            toytype: "Educational Toys",
            image: product3,
            rate: 0,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 4,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39,
            oldprice: 0,
            category: "",
            toytype: "Educational Toys",
            image: product4,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 5,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Educational Toys",
            image: product5,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 6,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39.00,
            oldprice: 0,
            category: "",
            toytype: "Educational Toys",
            image: product6,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 7,
            productName: "Hape scoot-around",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Educational Toys",
            image: product7,
            rate: 0,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 8,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39.00,
            oldprice: 0,
            category: "",
            toytype: "Educational Toys",
            image: product8,
            rate: 0,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 9,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Educational Toys",
            image: product9,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 10,
            productName: "Hape scoot-around",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Playsets",
            image: product10,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 11,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Playsets",
            image: product11,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 12,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Playsets",
            image: product12,
            rate: 0,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 13,
            productName: "Wooden sortion Toys",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39.00,
            oldprice: 0,
            category: "",
            toytype: "Control Toys",
            image: product13,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 14,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Control Toys",
            image: product14,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 15,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 29.00,
            oldprice: 39.00,
            category: "sale",
            toytype: "Control Toys",
            image: product15,
            rate: 0,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 16,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39.00,
            oldprice: 0,
            category: "",
            toytype: "Eco-Friendly Toys",
            image: product16,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 17,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39.00,
            oldprice: 0,
            category: "",
            toytype: "Eco-Friendly Toys",
            image: product6,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
        {
            id: 18,
            productName: "Magna etiam tempor orci",
            description: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus",
            price: 39.00,
            oldprice: 0,
            category: "",
            toytype: "Stuffed Toys",
            image: product10,
            rate: 5,
            Stock: true,
            quantitybuy: 1
        },
    ])

    const [panier, setPanier] = useState([])
    const [productmodal, setProductmodal] = useState([])

    const [open, setOpen] = useState(false)
    const arrayPanier = [...panier]
    const AddToCard = (parames) => {
        let productAdd = product.filter(element => element.id == parames)
        let questionPanier = panier.filter(element => element.id == parames)
        if (questionPanier.length == 0) {
            arrayPanier.push(productAdd[0])
            setPanier(arrayPanier)
        } else {
            let productplus = panier.filter(element => element.id == parames)
            productplus[0].quantitybuy++
        }
        // let productClicked = [...productAdd]

        setProductmodal(productAdd)
        console.log(`${productmodal} here`);
        setOpen(true)


    }



    return (
        <>

            <MyContext.Provider value={[product, setProduct, panier, setPanier, AddToCard, open, setOpen, productmodal, setProductmodal]} >
                {children}
            </MyContext.Provider>

        </>
    )

}
