'use client';

import React from 'react';
import { FaHome, FaSearch, FaBookmark, FaMusic, FaHeart, FaCompactDisc, FaList } from 'react-icons/fa';

const Sidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'home', name: 'Home', icon: FaHome },
    { id: 'search', name: 'Search', icon: FaSearch },
    { id: 'playlists', name: 'Playlists', icon: FaList },
    { id: 'albums', name: 'Albums', icon: FaCompactDisc },
    { id: 'genres', name: 'Genres', icon: FaMusic },
    { id: 'favorites', name: 'Favorites', icon: FaHeart },
    { id: 'library', name: 'Your Library', icon: FaBookmark },
  ];

  return (
    <div className="glass-dark rounded-lg p-6 h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Spotify 2.0</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="text-lg" />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="mt-8 p-4 glass rounded-lg">
        <h3 className="text-white font-semibold mb-2">Recently Played</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div>Today's Top Hits</div>
          <div>Rock Classics</div>
          <div>Chill Vibes</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
