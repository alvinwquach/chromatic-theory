const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Please upload an image of your client.',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default gallery
