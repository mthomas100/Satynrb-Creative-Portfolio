export default {
  name: 'picture',
  title: 'Picture',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: "An optional caption of this photo",
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
  ]
  }