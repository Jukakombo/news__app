import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Enter news headline',
      type: 'string',
    }),
    defineField({
      name: 'journalist',
      title: 'Name of the reporter',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Upload image profile',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'paragraphe',
      title: 'Enter the full paragraphe',
      type: 'text',
    }),
    defineField({
      name: 'details',
      title: 'Enter the news detail',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
