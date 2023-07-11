import React from "react";
import ResponsiveAppBar from "./Navbar";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import { Pie} from "./Piechart"
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import { Typography } from "@mui/material";
const Home = () => {
  const css = require("../css/home.css").toString();
    const user = useSelector(selectUser);
          console.log(user);
  return (
    <>
      <Helmet>{css}</Helmet>
      <div className="navbar">
        <PersistentDrawerLeft style={{ display: "block" }} />
      </div>
      <div className="pie">
        <Pie style={{ display: "block" }} />
      </div>

    </>
  );
};

export default Home;
