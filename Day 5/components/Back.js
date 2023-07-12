import React from "react";
import { Helmet } from "react-helmet";
const Back = () => {
  const css = require("../css/footer.css").toString();
  return (
    <>
    <Helmet>{css}</Helmet>
      <div className="backContainer">
             <h3>General Ledger</h3>
      </div>
    </>
  );
};

export default Back;
