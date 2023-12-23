
import {defineConfig} from "sanity"
import { deskTool } from "sanity/desk"
import { products } from "./Schemas/products"

export const client = defineConfig({
    projectId : "jormnwr0",
    dataset: "production",
    apiVersion:" 2023-11-10",
    basePath: "/admin",
    title:"Ecommerce Front End Demo",
    plugins: [deskTool()],
    schema : {
        types : [products]
    }
})
