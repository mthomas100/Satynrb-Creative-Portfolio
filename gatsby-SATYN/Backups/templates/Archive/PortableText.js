import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '@sanity/block-content-to-react/lib/targets/dom';

const PortableText = ({ blocks, id = 'block' }) => {
  console.log(blocks);
  return (
    <>
      {blocks.map((block) => (
        <BlockContent
          blocks={block}
          serializers={serializers}
          className={id}
          renderContainerOnSingleChild
        />;
      ))}
    </>
  );
};
export default PortableText;
