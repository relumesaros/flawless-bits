import React from 'react';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <Helmet>
      <title>Flawless Bits</title>

      {/* Primary Meta Tags */}

      <meta
        name="description"
        content="Flawless Bits is a startup outsourcing company that builds web-based applications for organizations looking to be more efficient, grow and serve their customers better."
      />
      <meta property="og:title" content="Flawless Bits"/>

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://flawless-bits.com"/>
      <meta property="og:site_name" content="Flawless Bits"/>
      <meta
        property="og:description"
        content="Flawless Bits is an outsourcing startup company that provides quality software and services"
      />
      <meta property="og:image" content="https://s3.amazonaws.com/flawless-bits.com/flawless-bits-card.png"/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary"/>
      <meta property="twitter:url" content="https://flawless-bits.com"/>
      <meta property="twitter:title" content="Flawless Bits:: Software Development Company"/>
      <meta
        property="twitter:description"
        content="Flawless Bits is an outsourcing startup company that provides quality products and services"
      />
      <meta property="twitter:image" content="https://s3.amazonaws.com/flawless-bits.com/flawless-bits-card.png"/>

    </Helmet>
  );
};
