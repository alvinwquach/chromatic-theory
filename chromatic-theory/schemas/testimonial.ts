const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please provide his/her name.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      description: 'Please provide the testimonial.',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default testimonial
