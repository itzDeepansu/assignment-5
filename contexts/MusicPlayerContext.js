'use client';

import React, { createContext, useContext, useReducer, useRef, useEffect } from 'react';
import { songs } from '../data/songs';

const MusicPlayerContext = createContext();

const initialState = {
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  isShuffling: false,
  isRepeating: false,
  queue: [],
  currentIndex: 0,
  isLoading: false
};

function musicPlayerReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSong: action.payload.song,
        queue: action.payload.queue || [action.payload.song],
        currentIndex: action.payload.index || 0
      };
    
    case 'TOGGLE_PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: action.payload
      };
    
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload
      };
    
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload
      };
    
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload
      };
    
    case 'TOGGLE_SHUFFLE':
      return {
        ...state,
        isShuffling: !state.isShuffling
      };
    
    case 'TOGGLE_REPEAT':
      return {
        ...state,
        isRepeating: !state.isRepeating
      };
    
    case 'NEXT_SONG':
      const nextIndex = state.isShuffling 
        ? Math.floor(Math.random() * state.queue.length)
        : state.currentIndex + 1;
      
      if (nextIndex >= state.queue.length) {
        if (state.isRepeating) {
          return {
            ...state,
            currentIndex: 0,
            currentSong: state.queue[0]
          };
        }
        return state;
      }
      
      return {
        ...state,
        currentIndex: nextIndex,
        currentSong: state.queue[nextIndex]
      };
    
    case 'PREVIOUS_SONG':
      const prevIndex = state.isShuffling 
        ? Math.floor(Math.random() * state.queue.length)
        : state.currentIndex - 1;
      
      if (prevIndex < 0) {
        if (state.isRepeating) {
          return {
            ...state,
            currentIndex: state.queue.length - 1,
            currentSong: state.queue[state.queue.length - 1]
          };
        }
        return state;
      }
      
      return {
        ...state,
        currentIndex: prevIndex,
        currentSong: state.queue[prevIndex]
      };
    
    case 'SET_QUEUE':
      return {
        ...state,
        queue: action.payload
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    
    default:
      return state;
  }
}

export const MusicPlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicPlayerReducer, initialState);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      dispatch({ type: 'SET_CURRENT_TIME', payload: audio.currentTime });
    };

    const handleLoadedMetadata = () => {
      dispatch({ type: 'SET_DURATION', payload: audio.duration });
      dispatch({ type: 'SET_LOADING', payload: false });
    };

    const handleEnded = () => {
      dispatch({ type: 'NEXT_SONG' });
    };

    const handleLoadStart = () => {
      dispatch({ type: 'SET_LOADING', payload: true });
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && state.currentSong) {
      audioRef.current.src = state.currentSong.src;
      audioRef.current.volume = state.volume;
      
      if (state.isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [state.currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (state.isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [state.isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  const playSong = (song, queue = null, index = 0) => {
    console.log('playSong called with:', { song: song.title, queue: queue?.length, index });
    const songQueue = queue || songs;
    dispatch({ 
      type: 'SET_CURRENT_SONG', 
      payload: { song, queue: songQueue, index } 
    });
    dispatch({ type: 'SET_PLAYING', payload: true });
  };

  const togglePlay = () => {
    dispatch({ type: 'TOGGLE_PLAY' });
  };

  const nextSong = () => {
    dispatch({ type: 'NEXT_SONG' });
  };

  const previousSong = () => {
    dispatch({ type: 'PREVIOUS_SONG' });
  };

  const seekTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      dispatch({ type: 'SET_CURRENT_TIME', payload: time });
    }
  };

  const setVolume = (volume) => {
    dispatch({ type: 'SET_VOLUME', payload: volume });
  };

  const toggleShuffle = () => {
    dispatch({ type: 'TOGGLE_SHUFFLE' });
  };

  const toggleRepeat = () => {
    dispatch({ type: 'TOGGLE_REPEAT' });
  };

  const value = {
    ...state,
    playSong,
    togglePlay,
    nextSong,
    previousSong,
    seekTo,
    setVolume,
    toggleShuffle,
    toggleRepeat
  };

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};
