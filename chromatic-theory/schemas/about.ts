const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'selfie',
      title: 'Selfie',
      type: 'image',
      description: 'Please upload an image of yourself.',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero (Image)',
      type: 'image',
      description: 'Please upload an image of your salon logo.',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'story',
      title: 'Story',
      type: 'array',
      description: 'Please provide your story here.',
      of: [{type: 'block'}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default about
