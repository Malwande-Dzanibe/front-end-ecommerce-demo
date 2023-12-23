"use client"

import { Product } from "@/types/products"
import {createContext, useState, useEffect } from "react"
import {toast} from "react-hot-toast"

export interface contextType {
    totalQuantity : number,
    totalPrice : number,
    cart : Product[],
    qty : number,
    onAdd : (product : Product, quantity: number)=>void,
    onRemove : (id : string)=> void,
}

const context = createContext<contextType | null>(null)

export const ContextWrapper = ({children}: {
    children: React.ReactNode
  })=>{

    const getCartFromLocal = () : Product[]=>{
    let value

    if(typeof window !== "undefined"){
        value = localStorage.getItem("cartFromLocal")
    }
    if(value === undefined || value === null){
        return []
    }

    return JSON.parse(value)?JSON.parse(value):[]

    }

    const getQtyFromLocal = () : number =>{
        let value

        if(typeof window !== "undefined"){
            value = localStorage.getItem("qtyFromLocal")
        }
        if(value === undefined || value === null){
            return 1
        }
    
        return JSON.parse(value)?JSON.parse(value):1
    }

    const getTotalQuantityFromLocal = () : number =>{
        let value

        if(typeof window !== "undefined"){
            value = localStorage.getItem("totalQuantityFromLocal")
        }
        if(value === undefined || value === null){
            return 0
        }
    
        return JSON.parse(value)?JSON.parse(value): 0
    }

    const getTotalPriceFromLocal = () : number =>{
        let value

        if(typeof window !== "undefined"){
            value = localStorage.getItem("totalPriceFromLocal")
        }
        if(value === undefined || value === null){
            return 0
        }
    
        return JSON.parse(value)?JSON.parse(value): 0
    }
    
    const [cart, setCart] = useState<Product[]>(getCartFromLocal)
    const [qty, setQty] = useState<number>(getQtyFromLocal)
    const [totalQuantity, setTotalQuantity] = useState<number>(getTotalQuantityFromLocal)
    const [totalPrice, setTotalPrice] = useState<number>(getTotalPriceFromLocal)

    let uniqueObjext : any ;

    const onAdd = (product : Product, quantity: number)=>{

        toast.success(`${quantity} item added to cart`)

        const chosenOne = cart.findIndex((item)=>{
            return item._id === product._id
        })

        if(chosenOne >= 0){   
            cart[chosenOne].qty += quantity
        }else{
            product.qty = quantity
            setCart([...cart, {...product}])
        }

        setTotalPrice((prev)=>{
             return prev + product.price * quantity
        })

        setTotalQuantity((prev)=>{
            return prev + quantity
        })       
        
    }

    const onRemove = (id : string)=>{

        uniqueObjext = cart.find((item : Product)=>{
            return item._id === id
        }) 

        setTotalPrice((prev)=>{
            return prev - uniqueObjext.price * uniqueObjext.qty
        })

        setTotalQuantity((prev)=>{
            return prev - uniqueObjext.qty
        })
        
        const newCart = cart.filter((item : Product)=>{
            return item._id !== id
        })

        setCart(newCart)

        toast.success(`${uniqueObjext.qty} ${uniqueObjext.qty > 1 ? `items` : `item`} removed from cart`)
    }

    useEffect(()=>{
        localStorage.setItem("cartFromLocal", JSON.stringify(cart))
        localStorage.setItem("qtyFromLocal", JSON.stringify(qty))
        localStorage.setItem("totalQuantityFromLocal", JSON.stringify(totalQuantity))
        localStorage.setItem("totalPriceFromLocal", JSON.stringify(totalPrice))
    },[cart, qty, totalQuantity, totalPrice])

    return (
        <context.Provider value={{
            cart,
            qty,
            totalQuantity,
            totalPrice,
            onAdd,
            onRemove
        }}>
            {children}
        </context.Provider>
    )
}

export default context

