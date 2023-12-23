
"use client"

import context, { contextType } from '@/store/useContextFile'
import { Product } from '@/types/products'
import {toast }from 'react-hot-toast'

type Props = {
  productProp : Product
}

import React, { useContext } from 'react'

const Counter = ({productProp} : Props) => {
  
  const usingContext = useContext(context) as contextType
    
  const frontEndAlert = ()=>toast.success("This Is Just A Front End Demo")

  return (
    <div>
        <div className='quantity-wrapper'>
                  <p className='quantity'>Quantity : {usingContext.qty}</p>
        </div>
        <div className='buttons-wrapper2'>
                  <button className='add-to-cart' onClick={()=>usingContext.onAdd(productProp, usingContext.qty)}>Add To Cart</button>
                  <button className='buy-now' onClick={()=>frontEndAlert()}>Buy now</button>
          </div>
    </div>
  )
}

export default Counter