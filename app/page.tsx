import Image from 'next/image'
import Link from 'next/link'
import getProducts from '@/utils/getProducts'
import { Toaster } from 'react-hot-toast'

export default async function Home() {

  const products = await getProducts()
  
  return (
    <main className='main'>
        <div className='wrapper5'>
          <Toaster/>
              {
                products.map((item)=>{
                    return (
                      <Link className='link' href={`/product/${item.slug}`} key={item._id}>
                          <div className='item'>
                              {item.image && (
                                <Image src={item.image[0]}  alt={item.name} width={200} height={200} className='image'/>
                              )}
                              <h6 className='title'>{item.name}</h6>
                              <p className='price'>R {item.price}.00</p>
                          </div>
                      </Link>
                    )
                })
              }
        </div>
    </main>
  )
}
