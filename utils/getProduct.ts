

import { Product } from "@/types/products"
import {createClient, groq} from "next-sanity"

const getProduct = async  (slug: string) : Promise<Product>=>{
    
    const client = createClient({
        projectId : "jormnwr0",
        dataset: "production",
        apiVersion: "2023-11-10",
        useCdn : true
    })

    return client.fetch(groq`*[_type == "products" && slug.current == $slug][0]{
        name,
        "slug" : slug.current,
        "image": image[].asset->url,
        price,
        description,
        _id,
        _createdAt,
    }`,{slug:slug})
}

export default getProduct 