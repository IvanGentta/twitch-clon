import React from "react";
import { rec_channels, top_channels } from "../data/MOCK_DATA";
import { RiMovieLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import Image from "next/image";

const SideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[240px] h-screen p-2 bg-[#1f1f24]">
      <div className="pt-2">
        <p className="hidden xl:flex uppercase font-bold text-sm">
          Recommended channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
              className="rounded-full"
            />
          </div>
          <div className="hidden xl:flex justify-between ml-2 w-full">
            <div>
              <p>{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <div className="flex justify-end">
              <p className="flex items-center">
                <BsDot color="red" size={40} />
                {item.rank}K
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="pt-7">
        <p className="hidden xl:flex md:pt-5 uppercase font-bold text-sm py-4">
          Top channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden  justify-center w-full" />
        </p>
      </div>
      {top_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <Image
            src={item.avatar}
            width="50"
            height="50"
            alt={item.username}
            className="rounded-full"
          />
          <div className="hidden xl:flex justify-between ml-2 w-full">
            <div>
              <p>{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <div className="flex">
              <p className="flex items-center">
                <BsDot color="red" size={40} />
                {item.rank}K
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
