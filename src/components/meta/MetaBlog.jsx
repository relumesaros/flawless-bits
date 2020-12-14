import React from 'react';
import MetaTags, { ReactTitle } from 'react-meta-tags';

export default ({ title, subTitle, s3imageBucketPath, link }) => {
  return (
    <MetaTags>
      {/* Primary Meta Tags */}
      <ReactTitle title={title}/>

      <meta
        name="description"
        content={subTitle}
      />
      <meta property="og:title" content={title}/>

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`https://flawless-bits.com/${link}`}/>
      <meta property="og:site_name" content="Flawless Bits"/>
      <meta
        property="og:description"
        content={subTitle}
      />
      <meta property="og:image" content={`https://s3.amazonaws.com/flawless-bits.com/${s3imageBucketPath}`}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary"/>
      <meta property="twitter:url" content={`https://flawless-bits.com/${link}`}/>
      <meta property="twitter:title" content={title}/>
      <meta
        property="twitter:description"
        content={subTitle}
      />
      <meta property="twitter:image" content={`https://s3.amazonaws.com/flawless-bits.com/${s3imageBucketPath}`}/>

    </MetaTags>
  );
};
