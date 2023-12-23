"use client"

import React, { useState } from 'react'
import { Product } from '@/types/products'
import Image from 'next/image'
type Params = {
    product : Product
}

const ImageOptions = ({product} : Params) => {

    const [index, setIndex] = useState(0)
    
  return (
    <div className='left'>
            
            <Image src={product.image[index]} alt={product.image[index]} width={300} height={250} className='big-image'/>
            <div className='image-options'>
                {
                    product?.image.map((item, itemId)=>{
                    return (
                        <button onClick={()=>setIndex(itemId)} >
                            <Image src={item} alt={item} key={itemId} width={100} height={100} className={itemId === index ? `blue-b` : `small-image`}/>
                        </button>
                    )
                    })
                }
            </div>
</div>
  )
}

export default ImageOptions