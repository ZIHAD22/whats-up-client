import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-4xl text-center">
      <h1>Not Found</h1>
      <Link to="/">
        <button className="btn btn-primary">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
