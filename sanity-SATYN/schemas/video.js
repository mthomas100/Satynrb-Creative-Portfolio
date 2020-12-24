export default {
    name: 'video',
    title: 'Video',
    description: 'WARNING: DO NOT USE THIS FIELD (USE YOUTUBE LINK BELOW INSTEAD TO ADD A VIDEO',
    type: 'file',
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        description: 'WARNING: DO NOT USE THIS FIELD (USE YOUTUBE LINK BELOW INSTEAD TO ADD A VIDEO',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      },
    ]
}