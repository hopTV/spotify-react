import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

const ListSong = () => {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdSong(song.id);
  });
  //   console.log(">>>> check data: ", DataSongs);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-800">
          {DataSongs &&
            DataSongs.length > 0 &&
            DataSongs.map((song, index) => {
              return (
                <tr
                  className={`text-gray-400 h-12 hover:bg-gray-600 hover:text-orange-500 cursor-pointer ${
                    idSong === song.id && "text-green-500"
                  }`}
                  key={index}
                  onClick={() => handlePlaySong(song.id)}
                >
                  <td className="text-center p-1">{index + 1}</td>
                  <td className="p-1">{song.name}</td>
                  <td className="text-center p-1">{song.author}</td>
                  <td className="text-center p-1">
                    <a href="{song.url}">
                      <i className="fa fa-download"></i>
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
