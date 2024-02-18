export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'https://lexizuchenna.vercel.app',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'https://github.com/lexizuchenna/',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      initialValue: ['Next JS', 'Mobile App', 'Web App', 'Node JS', 'React JS', 'All'],
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
