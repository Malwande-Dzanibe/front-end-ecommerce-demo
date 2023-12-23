
"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import context, { contextType } from '@/store/useContextFile'
import { useContext } from 'react'

const NavBar = () => {

    const usingContext = useContext(context) as contextType

    const [isClient, setIsClient] = useState(false)

    useEffect(()=>{
        setIsClient(true)
    },[isClient])
    
  return (
    <div className='nav'>
        <div className='logo-wrapper'>
            <Link href={`/`}>
                <h4 className='logo'>
                    Logo
                </h4>
            </Link>
        </div>
        <div className='admin-and-cart-wrapper'>
                <div className='admin-wrapper'>
                    <Link href={`/admin`}>
                        <h4 className='admin'>
                            Admin
                        </h4>
                    </Link>
                </div>
                <div className='cart-wrapper'>
                    <Link href={`/cart`}>
                        <h4 className='cart'>
                            Cart
                        </h4>
                    </Link>
                </div>
                <Link href={`/cart`}>
                <p className='cart-number'>{isClient && usingContext.totalQuantity}</p>
        </Link>
        </div>
    </div>
  )
}

export default NavBar