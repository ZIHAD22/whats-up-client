import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Helmet>
      <title>WhatsUp - {capitalizeFirstLetter(title)}</title>
    </Helmet>
  );
};

export default Title;
