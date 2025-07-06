# Test Audio Files

To test the music player functionality, you have several options:

## Option 1: Use Your Own MP3 Files (Recommended)
1. Copy any MP3 files you have to `public/songs/` folder
2. Rename them to match the names in `data/songs.js`:
   - blinding-lights.mp3
   - shape-of-you.mp3
   - bohemian-rhapsody.mp3
   - starboy.mp3
   - etc.

## Option 2: Download Free Test Audio
You can download royalty-free audio files from:
- [FreeSound.org](https://freesound.org) (requires free account)
- [Pixabay Audio](https://pixabay.com/music/)
- [OpenGameArt](https://opengameart.org/)

## Option 3: Test with Online Audio URLs
You can temporarily update the `src` property in `data/songs.js` to use online audio URLs for testing (note: this requires CORS support):

```javascript
// Example: Update one song for testing
{
  id: 1,
  title: "Test Song",
  artist: "Test Artist",
  album: "Test Album",
  genre: "Pop",
  duration: "0:30",
  src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Test URL
  cover: "/covers/test.jpg",
  year: 2024
}
```

## Current Status
- ✅ Player controls are functional
- ✅ Song clicking triggers playback
- ✅ Search and navigation work
- ⚠️ Audio files not present (will show 404 errors)
- ✅ UI and interactions work perfectly

## To Test Immediately
1. Click on any song in the "Trending Songs" section
2. Check browser console for debug logs
3. Player controls at bottom should show the selected song
4. Add real MP3 files to hear actual playback
