import React from "react";
import FeaturedPost from "./FeaturedPost";
import Tags from "./Tags";
import Newsletter from "./Newsletter";
import About from "./About";
import Ads from "./Ads";

const Sidebar = () => {
  return (
    <div className="lg:col-span-1">
      <About />
      <FeaturedPost />
      <Tags />
      <Newsletter />
      <Ads/>
    </div>
  );
};

export default Sidebar;
