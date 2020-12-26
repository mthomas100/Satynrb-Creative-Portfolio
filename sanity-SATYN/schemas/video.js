export default {
    name: 'video',
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
      
      function getVimeoId(url) { //false if not vimeo URL
        var id = false;
        var request = new XMLHttpRequest();
        request.open('GET', 'https://vimeo.com/api/oembed.json?url='+url , false);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            if(response.video_id) {
              id = response.video_id;
            }
          }
        };
        request.send();
        return id;
      }
      
      return (getYoutubeId(input) || getVimeoId(input))
        ? true
        : 'Please enter a URL from either Youtube or Vimeo'
    })
}


function getYoutubeId(url) { //null if not youtube URL
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

function getVimeoId(url) { //false if not vimeo URL
  var id = false;
  var request = new XMLHttpRequest();
  request.open('GET', 'https://vimeo.com/api/oembed.json?url='+url , false);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      if(response.video_id) {
        id = response.video_id;
      }
    }
  };
  request.send();
  return id;
}

function videoHandler(url) {
    if (getYoutubeId(url)) {
      const youtubeId = getYoutubeId('https://www.youtube.com/embed/-o2o91UIjPk');
      const youtubeEmbedLink = `www.youtube.com/embed/${youtubeId}`;
      return youtubeEmbedLink;
    }
    if (getVimeoId(url)) {
      const vimeoId = getVimeoId('https://vimeo.com/184859361');
      const vimeoEmbedLink = `https://player.vimeo.com/video/${vimeoId}`
      return vimeoEmbedLink;
    }
    return "not a valid URL"
}