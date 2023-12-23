"use client"

import React from 'react'
import { Product } from '@/types/products'
import Image from 'next/image'
import Link from 'next/link'


const More = ({image, price, name, slug}: Product) => {

  return (
    <div>
        <div className='slide'>
          <Link href={`/product/${slug}`} className='slide-link'>
          <Image src={image[0]} alt={name} width={350} height={200} className='more-image'/>
          </Link>
          <p className='price'>R {price}.00</p>
        </div>

    </div>
  )
}

export default More