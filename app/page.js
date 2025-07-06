'use client';

import React, { useState } from 'react';
import PlayerControls from '../components/PlayerControls';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import SearchBar from '../components/SearchBar';
import SongList from '../components/SongList';
import PlaylistCard from '../components/PlaylistCard';
import AlbumCard from '../components/AlbumCard';
import GenreCard from '../components/GenreCard';
import { songs, playlists, albums, genres } from '../data/songs';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

export default function Home() {
  const [activeView, setActiveView] = useState('home');
  const [searchResults, setSearchResults] = useState([]);
  const { playSong } = useMusicPlayer();
  const [searched,setSearched] = useState(false);

  const handleSearch = (term) => {
    if (!term) {
      setSearchResults([]);
      setSearched(false);
      return;
    }
    setSearched(true);
    const results = songs.filter((song) =>
      song.title.toLowerCase().includes(term.toLowerCase()) ||
      song.artist.toLowerCase().includes(term.toLowerCase()) ||
      song.album.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const handlePlaylistClick = (playlist) => {
    const playlistSongs = songs.filter(song => playlist.songs.includes(song.id));
    if (playlistSongs.length > 0) {
      playSong(playlistSongs[0], playlistSongs, 0);
    }
  };

  const handleAlbumClick = (album) => {
    const albumSongs = songs.filter(song => album.songs.includes(song.id));
    if (albumSongs.length > 0) {
      playSong(albumSongs[0], albumSongs, 0);
    }
  };

  const handleGenreClick = (genre) => {
    const genreSongs = songs.filter(song => song.genre === genre.name);
    if (genreSongs.length > 0) {
      playSong(genreSongs[0], genreSongs, 0);
    }
  };

  return (
    <div className="flex min-h-screen text-gray-300 pb-24">
      <MobileNav activeView={activeView} setActiveView={setActiveView} />
      
      <aside className="w-64 p-4 hidden lg:block">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </aside>
      
      <main className="flex-1 p-6 overflow-y-auto scrollbar-thin pt-32 lg:pt-6">
        {activeView === 'home' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Welcome to Spotify 2.0</h2>
              <div className="mb-8">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
            
            { !searched && <div>
              <h3 className="text-2xl font-bold text-white mb-4">Featured Playlists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {playlists.slice(0, 4).map((playlist) => (
                  <PlaylistCard 
                    key={playlist.id} 
                    playlist={playlist} 
                    onClick={() => handlePlaylistClick(playlist)} 
                  />
                ))}
              </div>
            </div> } 
            
            {! searched && <div>
              <h3 className="text-2xl font-bold text-white mb-4">Popular Albums</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {albums.slice(0, 4).map((album) => (
                  <AlbumCard 
                    key={album.id} 
                    album={album} 
                    onClick={() => handleAlbumClick(album)} 
                  />
                ))}
              </div>
            </div> }
            
            {searchResults.length > 0 ? (
              <div>
                <SongList songs={searchResults} title="Search Results" />
              </div>
            ) : (
              <div>
                <SongList songs={songs.slice(0, 10)} title="Trending Songs" />
              </div>
            )}
          </div>
        )}
        
        {activeView === 'search' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Search</h2>
              <SearchBar onSearch={handleSearch} />
            </div>
            {searchResults.length > 0 && (
              <SongList songs={searchResults} title="Search Results" />
            )}
            {searchResults.length === 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Browse All</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {genres.map((genre) => (
                    <GenreCard 
                      key={genre.id} 
                      genre={genre} 
                      onClick={() => handleGenreClick(genre)} 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {activeView === 'playlists' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Your Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {playlists.map((playlist) => (
                <PlaylistCard 
                  key={playlist.id} 
                  playlist={playlist} 
                  onClick={() => handlePlaylistClick(playlist)} 
                />
              ))}
            </div>
          </div>
        )}
        
        {activeView === 'albums' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {albums.map((album) => (
                <AlbumCard 
                  key={album.id} 
                  album={album} 
                  onClick={() => handleAlbumClick(album)} 
                />
              ))}
            </div>
          </div>
        )}
        
        {activeView === 'genres' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Browse by Genre</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {genres.map((genre) => (
                <GenreCard 
                  key={genre.id} 
                  genre={genre} 
                  onClick={() => handleGenreClick(genre)} 
                />
              ))}
            </div>
          </div>
        )}
        
        {activeView === 'favorites' && (
          <div>
            <SongList songs={songs} title="Your Favorite Songs" />
          </div>
        )}
        
        {activeView === 'library' && (
          <div>
            <SongList songs={songs} title="Your Library" />
          </div>
        )}
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <PlayerControls />
      </div>
    </div>
  );
}
