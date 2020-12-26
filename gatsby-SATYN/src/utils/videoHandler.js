function getYoutubeId(url) {
  // null if not youtube URL
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

function getVimeoId(url) {
  const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  const match = url.match(regExp);

  return match[5] || null;
}

export default function videoHandler(url) {
  console.log(url);
  if (getYoutubeId(url)) {
    const youtubeId = getYoutubeId(url);
    const youtubeEmbedLink = `https://www.youtube.com/embed/${youtubeId}`;
    return youtubeEmbedLink;
  }
  if (getVimeoId(url)) {
    const vimeoId = getVimeoId(url);
    const vimeoEmbedLink = `https://player.vimeo.com/video/${vimeoId}`;
    return vimeoEmbedLink;
  }
  console.log('not a valid URL');
}
