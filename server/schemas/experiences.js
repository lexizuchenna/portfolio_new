export default {
  name: 'work-experiences',
  title: 'Work Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        {
          name: 'experience',
          title: 'experience',
          type: 'document',
          fields: [
            {name: 'title', title: 'Job Title', type: 'string'},
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'desc',
              title: 'Desc',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
}
