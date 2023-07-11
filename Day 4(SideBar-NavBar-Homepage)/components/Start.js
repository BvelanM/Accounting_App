import React, { useState } from "react";
import LoginPage from "./Login";
import { Helmet } from "react-helmet";
import SignUpPage from "./Signin";
const StartPage = () => {
  const css = require("../css/start.css").toString();
 return (
   <>  <Helmet >
           {css}
   </Helmet>
       <div className="startContainer">
         <div style={{ borderRight: "3px solid black" }}>
           <LoginPage />
         </div>
         <SignUpPage />
       </div>

   </>
 );
}

export default StartPage;