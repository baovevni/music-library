const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },
       // prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function() {
       for (const playlistId in this.playlists) {
              const playlistInfo = this.playlists[playlistId];
              console.log(`${playlistInfo.id}: ${playlistInfo.name} - ${playlistInfo.tracks.length} tracks`);
       }
},
printTracks: function() {
       for (const trackId in this.tracks) {
              const trackInfo = this.tracks[trackId];
              console.log(`${trackId}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`)
       }
},
printPlaylist: function(playlistId) {
       const playlistInfo = this.playlists[playlistId];
       console.log(`${playlistInfo.id}: ${playlistInfo.name} - ${playlistInfo.tracks.length} tracks`);
       for (const trackId of playlistInfo.tracks) {
              const trackInfo = this.tracks[trackId];
              console.log(`${trackId}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`);
       }

},
addTrackToPlaylist: function(trackId, playlistId) {
       this.playlists[playlistId].tracks.push(trackId);
},
addTrack: function(name, artist, album) {
       const key = generateUid();
       const value = {
              id: key,
              name: name,
              artist: artist,
              album: album
       };
       library.tracks[key] = value;
},
addPlaylist: function(name) {
       const key = generateUid();
       const value = {
              id: key,
              name: name,
              tracks: []
       };
       library.playlists[key] = value;
}
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

console.log('prints a list of all playlists');
library.printPlaylists();


console.log('prints a list of all tracks');
library.printTracks();


console.log('prints a list of tracks for a given playlist');
library.printPlaylist("p01");


console.log('adds an existing track to an existing playlist');
library.addTrackToPlaylist("t01", "p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


console.log('adds a track to the library');
library.addTrack("John", "Travolta", "Sunrise 2020");



console.log('adds a playlist to the library');
library.addPlaylist("Playlist 123");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}