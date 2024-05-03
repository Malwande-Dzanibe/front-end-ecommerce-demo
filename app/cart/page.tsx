
"use client"

import React from 'react'
import { useContext, useEffect, useState } from 'react'
import context, { contextType } from '@/store/useContextFile'
import { Product } from '@/types/products' 
import Image from 'next/image'
import{ toast }from 'react-hot-toast'

const Cart = () => {

  const [isClient, setIsClient] = useState(false)

  useEffect(()=>{
      setIsClient(true)
  },[isClient])

  const {cart, totalPrice, onRemove} = useContext(context) as contextType

  const frontEndAlert = ()=>toast.success("This Is Just A Front End Demo")

  return (
    
    <div className='cart-folder'>
        {
          isClient && (
            <div>
            <section className='wrapper'>
            {
              cart.length === 0 ? `You Have 0 Items In Your Cart` : cart?.map((item : Product)=>{
                  return (
                    <article className='on-cart'>
                          <div className='left'>
                          <Image src={item?.image[0]} alt={item?.name} width={300} height={150} className='image-in-cart'/>
                            </div>
                            <div className='right2'>
                            <h4 className='title2'>
                                  {item?.name}
                            </h4>
                            <h4 className='price2a'>
                              {`R ${item?.price}.00`}
                            </h4>
                            <h4 className='title2'>
                                  {`Quantity : ${item?.qty}`}
                            </h4>
                            <div className='buttons-wrapper'>
                                <button className='remove-b' onClick={()=>onRemove(item._id)}>
                                    Remove From Cart
                                </button>
                            </div>
                          </div>
                    </article>
                  )
                })
              }
    </section>
    <>
    <section className='sub-total-wrapper'>
              <div className='sub-title-wrapper'>
                  <h6 className="sub-title">{cart.length === 0 ? `` : `Total`}</h6>
              </div>
              <div className='sub-amount-wrapper'>
                  <h6 className={cart.length === 0 ? "sub-amount2" : 'sub-amount'}>{`R ${totalPrice}.00`}</h6>
              </div>
    </section>
    <div className='check-out-wrapper'>
              <button disabled={cart.length === 0 ? true : false} className={cart.length === 0 ? "undefined" : 'check-out' }onClick={()=>frontEndAlert()}>{cart.length === 0 ? "" : "Checkout"}</button>
    </div>
    </>
            </div>
          )
        }
    </div>
  )
}

export default Cart