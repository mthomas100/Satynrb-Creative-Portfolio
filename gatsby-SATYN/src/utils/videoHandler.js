function getYoutubeId(url) {
  // null if not youtube URL
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

function getVimeoId(url) {
  // false if not vimeo URL
  let id = false;
  const request = new XMLHttpRequest();
  request.open('GET', `https://vimeo.com/api/oembed.json?url=${url}`, false);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText);
      if (response.video_id) {
        id = response.video_id;
      }
    }
  };
  request.send();
  return id;
}

export default function videoHandler(url) {
  if (getYoutubeId(url)) {
    const youtubeId = getYoutubeId(url);
    const youtubeEmbedLink = `https://www.youtube.com/embed/${youtubeId}`;
    console.log(youtubeEmbedLink);
    return youtubeEmbedLink;
  }
  if (getVimeoId(url)) {
    const vimeoId = getVimeoId(url);
    const vimeoEmbedLink = `https://player.vimeo.com/video/${vimeoId}`;
    return vimeoEmbedLink;
  }
  console.log('not a valid URL');
}
