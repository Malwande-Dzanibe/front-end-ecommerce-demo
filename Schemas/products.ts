
export const products = {
    name:"products",
    title:"Products",
    type: "document",
    fields : [
        {
            name:"name",
            title:"Name",
            type: "string",
        },
        {
            name:"image",
            title:"Image",
            type: "array",
            of: [{type:"image"}],
            options:
                {hotspot : true}
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name:"slug",
            title:"Slug",
            type: "slug",
            options: 
                {source:"name"}
        },
        {
            name:"quantity",
            title:"Quantity",
            type: "number",
            options: 
                {default:"1"}
        },
    ]
}