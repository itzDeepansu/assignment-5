'use client';

import React from 'react';

const GenreCard = ({ genre, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${genre.color} glass-hover rounded-lg p-6 cursor-pointer transition-all duration-300 group h-32 flex items-center justify-center`}
    >
      <h3 className="text-white font-bold text-xl text-center">{genre.name}</h3>
    </div>
  );
};

export default GenreCard;
