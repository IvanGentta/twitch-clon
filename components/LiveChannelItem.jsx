import Image from "next/image";
import React from "react";

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="p-2">
      <div className="flex flex-col ">
        <div className="flex ">
          <p className="text-white text-sm font-semibold absolute ml-2 mt-2 bg-red-600 px-[6px] rounded-md">
            LIVE
          </p>
        </div>
        <div className="flex hover:cursor-pointer">
          <Image className="-z-10" src={img} />
        </div>
      </div>
      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            src={profile_img}
            alt="/"
            width="50"
            height="50"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm text-gray-500">{user}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelItem;
