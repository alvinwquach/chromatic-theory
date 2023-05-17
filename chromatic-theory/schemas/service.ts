const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please provide the name of this service.',
    },
    {
      name: 'slug',
      title: 'Unique URL',
      type: 'slug',
      description:
        'Your unique url will be created from the name field above. Please click on the generate button.',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      description: 'Please provide a short description of your service (if necessary).',
    },
    {
      name: 'durationHour',
      description: 'Please provide how long the service will be.',
      title: 'Duration (Hours)',
      type: 'string',
    },
    {
      name: 'durationMinutes',
      description: 'Please provide how long the service will be.',
      title: 'Duration (Minutes)',
      type: 'string',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
      description: 'Please provide the price for this service.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Set Price',
      name: 'setPrice',
      type: 'boolean',
      description: 'If unchecked, this will display (Starting at) before the price.',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default service
