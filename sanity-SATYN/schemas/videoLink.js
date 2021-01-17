export default {
    name: 'videoLink',
    title: 'Video',
    type: 'string',
    description: 'Must be a link from youtube or vimeo (optional field)',
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
    
}