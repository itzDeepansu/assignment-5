export const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    duration: "3:20",
    src: "/songs/blinding-lights.mp3",
    cover: "/covers/blinding-lights.jpg",
    year: 2020
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    genre: "Pop",
    duration: "3:53",
    src: "/songs/shape-of-you.mp3",
    cover: "/covers/shape-of-you.jpg",
    year: 2017
  },
  {
    id: 3,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "Rock",
    duration: "5:25",
    src: "/songs/bohemian-rhapsody.mp3",
    cover: "/covers/bohemian-rhapsody.jpg",
    year: 1975
  },
  {
    id: 4,
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    genre: "Pop",
    duration: "3:51",
    src: "/songs/starboy.mp3",
    cover: "/covers/starboy.jpg",
    year: 2016
  },
  {
    id: 5,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    album: "x (Multiply)",
    genre: "Pop",
    duration: "3:50",
    src: "/songs/thinking-out-loud.mp3",
    cover: "/covers/thinking-out-loud.jpg",
    year: 2014
  },
  {
    id: 6,
    title: "We Will Rock You",
    artist: "Queen",
    album: "News of the World",
    genre: "Rock",
    duration: "2:00",
    src: "/songs/we-will-rock-you.mp3",
    cover: "/covers/we-will-rock-you.jpg",
    year: 1977
  },
  {
    id: 7,
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    genre: "Soul",
    duration: "4:45",
    src: "/songs/someone-like-you.mp3",
    cover: "/covers/someone-like-you.jpg",
    year: 2011
  },
  {
    id: 8,
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    genre: "Soul",
    duration: "3:48",
    src: "/songs/rolling-in-the-deep.mp3",
    cover: "/covers/rolling-in-the-deep.jpg",
    year: 2011
  },
  {
    id: 9,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    genre: "Funk",
    duration: "4:29",
    src: "/songs/uptown-funk.mp3",
    cover: "/covers/uptown-funk.jpg",
    year: 2014
  },
  {
    id: 10,
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    album: "Trolls (Original Motion Picture Soundtrack)",
    genre: "Pop",
    duration: "3:56",
    src: "/songs/cant-stop-the-feeling.mp3",
    cover: "/covers/cant-stop-the-feeling.jpg",
    year: 2016
  }
];

export const playlists = [
  {
    id: 1,
    name: "Today's Top Hits",
    description: "The most played songs right now",
    cover: "/covers/top-hits.jpg",
    songs: [1, 2, 4, 9, 10]
  },
  {
    id: 2,
    name: "Rock Classics",
    description: "Timeless rock anthems",
    cover: "/covers/rock-classics.jpg",
    songs: [3, 6]
  },
  {
    id: 3,
    name: "Chill Vibes",
    description: "Perfect for relaxing",
    cover: "/covers/chill-vibes.jpg",
    songs: [5, 7, 8]
  },
  {
    id: 4,
    name: "Party Mix",
    description: "Get the party started",
    cover: "/covers/party-mix.jpg",
    songs: [1, 4, 9, 10]
  }
];

export const albums = [
  {
    id: 1,
    title: "After Hours",
    artist: "The Weeknd",
    cover: "/covers/after-hours.jpg",
    year: 2020,
    genre: "Pop",
    songs: [1]
  },
  {
    id: 2,
    title: "÷ (Divide)",
    artist: "Ed Sheeran",
    cover: "/covers/divide.jpg",
    year: 2017,
    genre: "Pop",
    songs: [2]
  },
  {
    id: 3,
    title: "A Night at the Opera",
    artist: "Queen",
    cover: "/covers/night-at-opera.jpg",
    year: 1975,
    genre: "Rock",
    songs: [3]
  },
  {
    id: 4,
    title: "21",
    artist: "Adele",
    cover: "/covers/21.jpg",
    year: 2011,
    genre: "Soul",
    songs: [7, 8]
  }
];

export const genres = [
  { id: 1, name: "Pop", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: 2, name: "Rock", color: "bg-gradient-to-r from-red-500 to-orange-500" },
  { id: 3, name: "Soul", color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
  { id: 4, name: "Funk", color: "bg-gradient-to-r from-green-500 to-teal-500" },
  { id: 5, name: "Electronic", color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { id: 6, name: "Jazz", color: "bg-gradient-to-r from-yellow-500 to-orange-500" }
];
