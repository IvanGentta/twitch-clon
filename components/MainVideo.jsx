import React from "react";

const MainVideo = () => {
  return (
    <div id="mainVideo" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          src="https://www.youtube.com/embed/taLVM26bX2E"
          title="[Full stream] - Cuphead: The Delicious Last Course [Part 2]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MainVideo;
