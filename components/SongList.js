'use client';

import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { FaPlay, FaPause, FaHeart, FaEllipsisH } from 'react-icons/fa';

const SongList = ({ songs, title = "Songs" }) => {
  const { currentSong, isPlaying, playSong, togglePlay } = useMusicPlayer();

  const handlePlaySong = (song, index) => {
    console.log('SongList handlePlaySong:', { song: song.title, index, currentSong: currentSong?.title });
    if (currentSong && currentSong.id === song.id) {
      console.log('Toggling play for current song');
      togglePlay();
    } else {
      console.log('Playing new song:', song.title);
      playSong(song, songs, index);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-2">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`glass glass-hover rounded-lg p-4 flex items-center justify-between transition-all duration-300 ${
              currentSong?.id === song.id ? 'bg-purple-600/20 border-purple-500' : ''
            }`}
          >
            <div className="flex items-center space-x-4 flex-1 cursor-pointer" onClick={() => handlePlaySong(song, index)}>
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className={`text-white font-bold transition-opacity ${
                    currentSong?.id === song.id ? 'opacity-0' : 'group-hover:opacity-0'
                  }`}>{index + 1}</span>
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  currentSong?.id === song.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlaySong(song, index);
                    }}
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    {currentSong?.id === song.id && isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">{song.title}</h3>
                <p className="text-gray-300 text-sm">{song.artist}</p>
                <p className="text-gray-400 text-xs">{song.album}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">{song.duration}</span>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaHeart />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlaySong(song, index);
                }}
                className="text-gray-400 hover:text-white transition-colors sm:hidden"
              >
                {currentSong?.id === song.id && isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEllipsisH />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
