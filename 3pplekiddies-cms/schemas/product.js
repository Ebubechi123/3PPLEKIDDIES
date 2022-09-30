export default {
    name:"product",
    title:"Product",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        {
            name:"image",
            title:"Product Image",
            type:"image",
            options:{
                hotspot:true,
            },
        },
        {
            name:"description",
            title:"Description",
            type:"string",
        },
        {
            name:"category",
            title:"Category",
            type:"string",
        },
        {
            name:"catergoryimage",
            title:"CatergoryImage(category image must be the same across all products in the same category) ",
            type:"image",
            options:{
                hotspot:true,
            },
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
          },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            }
          },
          {
            name:"countInStock",
            title:"CountInStock",
            type:"number",
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength:96
            }
        },

    ]
}