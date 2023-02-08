import React, { useContext } from "react";
import { Songs } from "../Context";

const DetailSong = () => {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold ">now playing </h2>
      <h2 className="text-zinc-600 text-2xl"> sing me to sleep</h2>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full" src={song.links.images[0].url} alt="avartar" />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={song.links.images[1].url}
          alt="avartar"
        />
        <h2 className="text-xl text-white">{song.auther}</h2>
      </div>
    </div>
  );
};

export default DetailSong;
