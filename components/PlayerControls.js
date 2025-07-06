import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { FaPlay, FaPause, FaBackward, FaForward, FaVolumeUp, FaRandom, FaRedo } from 'react-icons/fa';

const PlayerControls = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    nextSong,
    previousSong,
    currentTime,
    duration,
    setVolume,
    volume,
    toggleShuffle,
    toggleRepeat,
    seekTo,
  } = useMusicPlayer();

  const handlePlayPause = () => {
    togglePlay();
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleSeekChange = (event) => {
    const newTime = parseFloat(event.target.value);
    seekTo(newTime);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full glass-dark p-4 rounded-lg">
      <div className="flex justify-between items-center w-full mb-4">
        <h4 className="text-lg text-gray-100">
          {currentSong ? `${currentSong.title} - ${currentSong.artist}` : 'No song playing'}
        </h4>
      </div>
      <div className="flex justify-between items-center w-full mb-4">
        <button onClick={toggleShuffle} className="text-gray-300 hover:text-white p-2">
          <FaRandom />
        </button>
        <button onClick={previousSong} className="text-gray-300 hover:text-white p-2">
          <FaBackward />
        </button>
        <button onClick={handlePlayPause} className="text-gray-300 hover:text-white p-2">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={nextSong} className="text-gray-300 hover:text-white p-2">
          <FaForward />
        </button>
        <button onClick={toggleRepeat} className="text-gray-300 hover:text-white p-2">
          <FaRedo />
        </button>
      </div>
      <div className="w-full mb-4">
        <input
          type="range"
          value={currentTime || 0}
          max={duration || 0}
          className="w-full h-2 bg-gray-800 rounded"
          onChange={handleSeekChange}
        />
        <div className="flex justify-between text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <FaVolumeUp className="text-gray-300 mr-2" />
        <input
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          className="w-1/2"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default PlayerControls;

