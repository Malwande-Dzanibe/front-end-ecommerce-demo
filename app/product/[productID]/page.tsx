
type Params = {
  params : {productID : string}
}

import getProduct from '@/utils/getProduct'
import getProducts from '@/utils/getProducts'
import Counter from '@/components/Counter'
import More from "../../../components/More"
import { Product } from '@/types/products'
import ImageOptions from '@/components/ImageOptions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Details',
  description: 'Front End E-Commerce Demo',
  keywords : "malwande dzanibe, ecommerce demo, e-commerce demo, nextJS, next.js, reactJS, react.js, portfolio, project, typescript, javascript, html, css, html5, css3, dzanibe media, frontend, front end, sanity.io"
}

const page = async ({params}:Params) => {

  const slug = params.productID

  const product = await getProduct(slug)

  const products = await getProducts()
  
  return (
    <div >
            <div className='wrapper2'>
              <ImageOptions product={product} />
            <div className='right'>
              <h4 className='title2'>
                    {product.name}
              </h4>
              <p className='description'>
                      {product.description}
              </p>
              <h4 className='price2'>R {product.price}.00</h4>
              <Counter productProp={product}/>
            </div>
        </div>
        <div className='you-may-also-like'>
          <div className='you-may-also-like-wrapper'>
          <h4>You May Also Like</h4>
          </div>
          <div className='slide2'>
          <div className='more'>
                    {
                      products.map((item: Product)=>{
                        return (
                          <More key={item._id} {...item}/>
                        )
                      })
                    }
                </div>
          </div>
        </div>
    </div>
  )
}

export default page


