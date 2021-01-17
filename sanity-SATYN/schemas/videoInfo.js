export default {
    name: 'videoInfo',
    title: 'Video Information',
    type: 'object',
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'videoURL',
        type: 'string',
        title: 'Video URL',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        },
        validation: Rule => Rule.custom(input => {
            if (typeof input === 'undefined') {
              return true // Allow undefined values
            }
            
            function getYoutubeId(url) { //null if not youtube URL
              const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
              const match = url.match(regExp);
            
              return (match && match[2].length === 11)
                ? match[2]
                : null;
            }
            
            function getVimeoId(url) {
              const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
              const match = url.match(regExp);
            
              return match[5] || null;
            }
            
            return (getYoutubeId(input) || getVimeoId(input))
              ? true
              : 'Please enter a URL from either Youtube or Vimeo'
          })
      },
      {
        title: 'Aspect Ratio',
        name: 'aspectRatio',
        type: 'string',
        options: {
          list: [
            { title: '16:9', value: '16:9' },
            { title: '5:4', value: '5:4' },
            { title: '4:3', value: '4:3' },
            { title: '3:2', value: '3:2' },
            { title: '16:10', value: '16:10' },
            { title: '16:9', value: '16:9' },
            { title: '1.85:1', value: '1.85:1' },
            { title: '2.35:1', value: '2.35:1' },
          ],
        },
      }
    ]
}