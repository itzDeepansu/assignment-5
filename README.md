# 🎵 Spotify 2.0 Clone - Enhanced Music Streaming App

A modern, feature-rich music streaming application built with Next.js, featuring a beautiful glassmorphic design, responsive layout, and seamless music playback experience.

![Spotify 2.0](https://img.shields.io/badge/Next.js-15.3.5-black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-blue)
![React Icons](https://img.shields.io/badge/React%20Icons-Latest-red)
![Status](https://img.shields.io/badge/Status-Complete-green)

## ✨ Features Implemented

### 🎨 **Modern UI/UX Design**
- ✅ **Glassmorphic Design** - Beautiful glass-like elements with backdrop blur effects
- ✅ **Responsive Layout** - Seamless experience across desktop, tablet, and mobile devices
- ✅ **Smooth Animations** - Elegant hover effects and transitions
- ✅ **Gradient Backgrounds** - Dynamic purple-blue gradient themes

### 🎵 **Music Player Functionality**
- ✅ **Full Player Controls** - Play, pause, next, previous, shuffle, repeat
- ✅ **Volume Control** - Adjustable volume slider with real-time feedback
- ✅ **Progress Bar** - Interactive seek functionality with time display
- ✅ **Queue Management** - Smart song queue with shuffle and repeat modes
- ✅ **Real-time State** - Live playback status across all components

### 🔍 **Search & Discovery**
- ✅ **Advanced Search** - Search songs by title, artist, or album
- ✅ **Real-time Results** - Instant search with live filtering
- ✅ **Genre Browsing** - Colorful genre categories for music discovery
- ✅ **Browse All** - Fallback genre view when no search is active

### 📋 **Content Organization**
- ✅ **Dynamic Playlists** - Pre-built themed playlists (Top Hits, Rock Classics, Chill Vibes, Party Mix)
- ✅ **Album Collections** - Organized album browsing and playback
- ✅ **Genre Categories** - Browse music by Pop, Rock, Soul, Funk, Electronic, Jazz
- ✅ **Favorites System** - Personal favorites collection
- ✅ **Music Library** - Complete music library management

### 📱 **Responsive Navigation**
- ✅ **Desktop Sidebar** - Full-featured sidebar navigation for large screens
- ✅ **Mobile Navigation** - Touch-friendly top navigation bar for mobile devices
- ✅ **Context Switching** - Seamless navigation between different views
- ✅ **Active State Indicators** - Visual feedback for current section

### 🎧 **Enhanced Player Features**
- ✅ **Context-Aware Playback** - Smart queue management based on current view
- ✅ **Playlist Integration** - Direct playlist playback with queue population
- ✅ **Album Playback** - Sequential album track playing
- ✅ **Genre Filtering** - Play songs filtered by genre selection

## 🏗️ Project Structure

```
spotify-2.0-clone/
├── app/
│   ├── layout.js          # Root layout with MusicPlayerProvider
│   ├── page.js            # Main application with all views
│   ├── globals.css        # Global styles with glassmorphic utilities
│   └── favicon.ico        # App icon
├── components/
│   ├── PlayerControls.js  # Bottom music player with full controls
│   ├── Sidebar.js         # Desktop navigation sidebar
│   ├── MobileNav.js       # Mobile-responsive navigation bar
│   ├── SearchBar.js       # Search functionality component
│   ├── SongList.js        # Dynamic song list with play controls
│   ├── PlaylistCard.js    # Interactive playlist cards
│   ├── AlbumCard.js       # Album display cards
│   └── GenreCard.js       # Colorful genre selection cards
├── contexts/
│   └── MusicPlayerContext.js  # Global state management for music player
├── data/
│   └── songs.js           # Sample data (songs, playlists, albums, genres)
├── public/
│   ├── songs/             # MP3 files directory
│   │   └── README.md      # Instructions for adding music files
│   └── covers/            # Album cover images directory
│       └── README.md      # Instructions for adding cover images
└── SETUP_GUIDE.md         # Detailed setup and usage instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/itzDeepansu/assignment-5
cd assignment-5
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your music files** (Optional)
   - Place MP3 files in `public/songs/` folder
   - Add album covers to `public/covers/` folder
   - Update `data/songs.js` to match your files

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Or [http://localhost:3001](http://localhost:3001) if port 3000 is in use

## 🎮 How to Use

### Desktop Experience
- Use the **left sidebar** to navigate between different sections
- Click on **playlists, albums, or genres** to start playback
- Use the **bottom player controls** for music management
- **Search bar** available on home and search pages

### Mobile Experience  
- Use the **top navigation bar** to switch between views
- **Touch-friendly controls** optimized for mobile interaction
- **Responsive design** adapts to all screen sizes

### Music Player Controls
- **Play/Pause**: Click any song or use bottom controls
- **Next/Previous**: Navigate through your queue
- **Shuffle**: Randomize playback order
- **Repeat**: Loop current queue
- **Volume**: Adjust playback volume
- **Seek**: Click progress bar to jump to specific time

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** - Beautiful icon library
- **[React Context API](https://react.dev/reference/react/useContext)** - State management
- **HTML5 Audio API** - Native audio playback
- **CSS Backdrop Filter** - Glassmorphic effects
- **Responsive Design** - Mobile-first approach

## 🎨 Design Features

### Glassmorphic UI Elements
- **Glass containers** with backdrop blur effects
- **Transparent backgrounds** with subtle borders
- **Hover animations** with smooth transitions
- **Custom scrollbars** matching the theme

### Color Scheme
- **Primary**: Purple to blue gradients
- **Accent**: Pink and teal highlights  
- **Background**: Deep purple-blue gradient
- **Text**: White and gray variations
- **Glass**: Semi-transparent with blur

## 📱 Browser Compatibility

Optimized for modern browsers supporting:
- ✅ HTML5 Audio API
- ✅ CSS Backdrop Filter
- ✅ ES6+ JavaScript features
- ✅ CSS Grid and Flexbox
- ✅ CSS Custom Properties

## 🔧 Customization

Easily customize the app by:

1. **Adding Your Music**
   - Update `data/songs.js` with your music metadata
   - Add MP3 files to `public/songs/`
   - Add cover images to `public/covers/`

2. **Styling Changes**
   - Modify Tailwind classes in components
   - Update gradient colors in `globals.css`
   - Customize glassmorphic effects

3. **Feature Extensions**
   - Add new playlist types
   - Implement additional genres
   - Extend player functionality

## 📄 Additional Documentation

- 📖 **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Detailed setup instructions
- 📁 **[public/songs/README.md](./public/songs/README.md)** - Music files guide
- 🖼️ **[public/covers/README.md](./public/covers/README.md)** - Album covers guide

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🎵 Experience the Future of Music Streaming

Enjoy your enhanced Spotify 2.0 experience with beautiful glassmorphic design, seamless playback, and intuitive navigation!

---

**Built with ❤️ using Next.js and modern web technologies**
