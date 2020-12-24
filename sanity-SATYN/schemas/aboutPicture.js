export default {
  name: 'aboutPicture',
  title: 'Picture',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
  ]
  }