export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'firstPublishedDate',
      type: 'datetime',
      title: 'First Published Date',
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Content',
    },
    {
      name: 'translations',
      type: 'object',
      fields: [
        {
          name: 'en',
          type: 'object',
          fields: [
            {name: 'title', type: 'string'},
            {name: 'content', type: 'markdown'},
            {name: 'slug', type: 'slug', options: {source: 'translations.en.title'}},
          ],
        },
      ],
    },
  ],
}
