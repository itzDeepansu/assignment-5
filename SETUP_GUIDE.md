# Spotify 2.0 Setup Guide

## Features Implemented

✅ **Glassmorphic UI Design** - Beautiful glass-like elements with blur effects
✅ **Responsive Layout** - Works on desktop, tablet, and mobile devices
✅ **Music Player Controls** - Play, pause, next, previous, shuffle, repeat
✅ **Volume Control** - Adjustable volume slider
✅ **Search Functionality** - Search songs by title, artist, or album
✅ **Playlists** - Pre-built playlists with different themes
✅ **Albums** - Album browsing and playback
✅ **Genre Categories** - Browse music by genre
✅ **Progress Bar** - Shows current playback position
✅ **Queue Management** - Song queue with shuffle and repeat modes
✅ **Mobile Navigation** - Touch-friendly navigation for mobile devices

## Setup Instructions

### 1. Add Your Music Files

Place your MP3 files in the `public/songs/` folder. Update the file names in `data/songs.js` to match your actual files.

### 2. Add Album Covers (Optional)

Place album cover images in the `public/covers/` folder. Supported formats: jpg, png, gif.

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or `http://localhost:3001` if 3000 is in use).

## Usage

- **Desktop**: Use the sidebar navigation to browse different sections
- **Mobile**: Use the top navigation bar to switch between views
- **Music Player**: 
  - Click any song to start playing
  - Use the bottom player controls for playback control
  - Adjust volume with the volume slider
  - Use shuffle and repeat buttons for different playback modes

## Technologies Used

- **Next.js 15** - React framework
- **Tailwind CSS** - Styling and responsive design
- **React Icons** - Beautiful icon set
- **HTML5 Audio API** - Audio playback functionality
- **React Context** - State management

## Browser Compatibility

The app works best on modern browsers that support:
- HTML5 Audio API
- CSS Backdrop Filter (for glassmorphic effects)
- ES6+ JavaScript features

## Customization

You can customize the app by:
1. Modifying the song data in `data/songs.js`
2. Adjusting colors and styles in the component files
3. Adding new features to the music player context
4. Creating additional playlists and genres

Enjoy your Spotify 2.0 experience! 🎵
