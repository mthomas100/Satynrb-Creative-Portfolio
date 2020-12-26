import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveEmbed from 'react-responsive-embed';
import videoHandler from '../utils/videoHandler';

export default function Video({ project }) {
  return (
    <>
      <ResponsiveEmbed src={videoHandler(project.videoURL)} allowfullscreen />
      <hr />
    </>
  );
}
