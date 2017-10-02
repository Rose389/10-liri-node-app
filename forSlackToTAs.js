// File for slacking code to the TA's




// My code.  A little chopped up, but can you check it for me?  The response I got is beneath the code.
// I did get my external API references working, but I included them here for your convenience. :-)
//

// npm's
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var Request = require("request");

// vars
var action = process.argv[2];
var value = process.argv[3];
var spotifyKeys ={
	ID: "d419c7f0be554a65b021bd015491b439",
	tSecret: "5f0cb65335594095ba2ea24315b35da6"
};

// switch-case
switch (action) {
  case "my-tweets":
    myTweets(twitterKeys);
    break;

  case "spotify-this-song":
    spotifyThisSong(spotifyKeys, value);
    break
  case "movie-this":
    movieThis(omdbKey, value);
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}

// the spotify function
	function spotifyThisSong(spotifyKeys, value){
		var spotify = new Spotify({
		  id: spotifyKeys.ID,
		  secret: spotifyKeys.Secret
		});
		 
		spotify.search({ type: 'track', query: value }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		 
		console.log(data); 
	};






/* The response I recieved when I ran the file, once with a really well known title, and once with a unique title.

WELL-KNOWN
seife@DESKTOP-AN209U2 MINGW64 /d/bootcamp/10-liri-node-app (master)
$ node liri.js spotify-this-song Breathe
The file keys.js is loaded.
{ tracks:
   { href: 'https://api.spotify.com/v1/search?query=Breathe&type=track&offset=0&limit=20',
     items:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     limit: 20,
     next: 'https://api.spotify.com/v1/search?query=Breathe&type=track&offset=20&limit=20',
     offset: 0,
     previous: null,
     total: 34039 } }

UNIQUE
seife@DESKTOP-AN209U2 MINGW64 /d/bootcamp/10-liri-node-app (master)
$ node liri.js spotify-this-song comatised
The file keys.js is loaded.
{ tracks:
   { href: 'https://api.spotify.com/v1/search?query=comatised&type=track&offset=0&limit=20',
     items:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     limit: 20,
     next: null,
     offset: 0,
     previous: null,
     total: 12 } }
*/