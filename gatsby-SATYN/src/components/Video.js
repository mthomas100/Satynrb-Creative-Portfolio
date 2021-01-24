import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveEmbed from 'react-responsive-embed';
import styled from 'styled-components';
import videoHandler from '../utils/videoHandler';

const VideoStyles = styled.div``;

export default function Video({ videoData }) {
  console.log(videoData);
  const { videoURL, aspectRatio } = videoData;
  // console.log(aspectRatio);
  return (
    <VideoStyles>
      <hr />
      <ResponsiveEmbed
        src={videoHandler(videoURL)}
        allowfullscreen
        ratio={aspectRatio || '16:9'}
      />
    </VideoStyles>
  );
}
