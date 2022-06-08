import React from "react";
import Helmet from "react-helmet";

const Title = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>WhatsUp - {title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};

export default Title;
