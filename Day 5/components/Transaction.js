import React from "react";
import { Helmet } from "react-helmet";
import PersistentDrawerLeft from "./Drawer";
export default function Transact(){
 const css = require("../css/home.css").toString();
 return (
   <>
     <Helmet>{css}</Helmet>
     <PersistentDrawerLeft />
     <div className="card">
       <form>
         <input type="text" />
         <br />
         <input type="text" />
         <br />
         <input type="text" />
         <br />
         <input type="text" />
         <br />
         <input type="text" />
         <br />
       </form>
     </div>
   </>
 );
}