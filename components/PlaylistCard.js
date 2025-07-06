'use client';

import React from 'react';
import { FaPlay } from 'react-icons/fa';

const PlaylistCard = ({ playlist, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="glass glass-hover rounded-lg p-4 cursor-pointer transition-all duration-300 group"
    >
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center">
          <span className="text-4xl font-bold text-white opacity-80">
            {playlist.name.charAt(0)}
          </span>
        </div>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 transition-colors">
            <FaPlay className="text-white ml-1" />
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg mb-1">{playlist.name}</h3>
        <p className="text-gray-300 text-sm">{playlist.description}</p>
        <p className="text-gray-400 text-xs mt-1">{playlist.songs.length} songs</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
