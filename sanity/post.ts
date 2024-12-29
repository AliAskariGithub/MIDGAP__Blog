import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Ex: This is my First Post",
      title: "Post Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Post Image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Post Summary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Post Content",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
        name: "author",
        type: "reference",
        title: "Author",
        to: [{ type: "author" }],
    })
  ],
});
