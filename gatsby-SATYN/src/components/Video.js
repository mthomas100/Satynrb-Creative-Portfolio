import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Video({ project }) {
  return (
    <>
      <div style={{ width: '100%', maxWidth: '100vw', height: 'auto' }}>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed
            type="video/mp4"
            src={project.video.asset.url}
            title={project.video.caption}
          />
        </ResponsiveEmbed>
      </div>
      <hr />
    </>
  );
}
