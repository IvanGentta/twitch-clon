import React from "react";
import Categories from "./Categories";
import IconBar from "./IconBar";
import LiveChannels from "./LiveChannels";
import MainVideo from "./MainVideo";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <MainVideo />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
};

export default Main;
