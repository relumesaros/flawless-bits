import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ title, subTitle, s3imageBucketPath, link }) => {
  return (
    <Helmet>
      <title>{title}</title>

      {/* Primary Meta Tags */}
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

    </Helmet>
  );
};
