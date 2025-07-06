'use client';

import React from 'react';
import { FaHome, FaSearch, FaList, FaCompactDisc, FaMusic, FaHeart } from 'react-icons/fa';

const MobileNav = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'home', name: 'Home', icon: FaHome },
    { id: 'search', name: 'Search', icon: FaSearch },
    { id: 'playlists', name: 'Playlists', icon: FaList },
    { id: 'albums', name: 'Albums', icon: FaCompactDisc },
    { id: 'genres', name: 'Genres', icon: FaMusic },
    { id: 'favorites', name: 'Favorites', icon: FaHeart },
  ];

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-40 glass-dark">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-white">Spotify 2.0</h1>
      </div>
      <div className="flex justify-around pb-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                activeView === item.id
                  ? 'text-white'
                  : 'text-gray-400'
              }`}
            >
              <Icon className="text-lg mb-1" />
              <span className="text-xs">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
