// code to retrieve data from keys.js
var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");



// store keys in a variable
var keys = require("keys.js");
var twitterkeys = keys.twitterkeys;
var spotifykeys = keys.spotifykeys;
var omdbkey = keys.omdbkey;

// make able to take in following commands:
var action = process.argv[2];
var valueArgs = process.argv;
var value = "";
	// Loop through all the words in the node argument
	// And do a little for-loop magic to handle the inclusion of "+"s
	for (var i = 3; i < nodeArgs.length; i++) {

	  if (i > 3 && i < nodeArgs.length) {

	    value = value + "+" + valueArgs[i];

	  }

	  else {

	    value += valueArgs[i];

	  }
	}

	// my tweets: `node liri.js my-tweets`
		// node package loaded: twitter
		// show the last 20 tweets and when they were created
		GET "https://api.twitter.com/1.1/collections/entries.json?id=custom-539487832448843776?count=20"



		// spotify-this-song:  `node liri.js spotify-this-song '<song name here>'`
		// Node package loaded: node-spotify-api
		// Spotify API's saved in keys.js


		// This will show the following info about the song:
			// Artist(s)


			// Song name


			// preview link of the song from spotify


			// the album the song is from


		// If no song is provided 
		// then your program will default to 
		// "The Sign" by Ace of Base.




	// movie-this: `node liri.js movie-this '<movie name here>'`
		// key needed: ``
		// node package: [Request](https://www.npmjs.com/package/request)
		// will output the following info
			// Title of the movie
			// Year movie came out
			// IMDB Rating of the movie
			// Rotton Tomates Rating of the movie
			// Country where movie was produced
			// Language of the movie
			// plot of the movie
			// actors of the movie


		/* If the user doesn't type a movie in, 
		 the program will output data for the movie 'Mr. Nobody.' */


	// do-what-it-says: `node liri.js do-what-it-says`
		// require fs package
		// retrieve text from random.txt

		fs.readFile("random.txt", "utf-8", function(error, data) {

			// If the code experiences any errors it will log the error to the console.
			if (error) {
			return console.log(error);
			}


			// call one of liri's commands
				/* It should run 'spotify-this-song' for "I Want it That Way"
					text can be changed to test out other commands. */


		})




// BONUS
	// output data to a file called log.txt

	// append each command to log.txt

	// DO NOT overwrite data with successive commands