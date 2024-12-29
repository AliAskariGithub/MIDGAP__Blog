import {defineField, defineType } from "sanity";

export const Author = defineType({
    name:"author",
    title:"Author",
    type:"document",
    fields: [
        defineField({
            name:"name",
            type:"string",
            title:"Author Name"
        }),
        defineField({
            name:"image",
            type:"image",
            title:"Image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name:"bio",
            type:"text",
            title:"Bio",
        })
    ]
})