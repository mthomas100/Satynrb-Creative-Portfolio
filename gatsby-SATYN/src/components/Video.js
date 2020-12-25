import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveEmbed from 'react-responsive-embed';

export default function Video({ project }) {
  console.log(project.videoURL);
  return (
    <>
      <ResponsiveEmbed
        src="https://player.vimeo.com/video/360663584"
        allowfullscreen
      />
      <hr />
    </>
  );
}
