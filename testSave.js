// code to retrieve data from keys.js
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var Request = require("request");

// store keys in a variable
var keys = require("./keys.js");
var twitterKeys = keys.twitterKeys;
var spotifyKeys = {
	ID: keys.spotifyID,
	Secret: keys.spotifySecret
};
var omdbKey = keys.omdbKey;


// make able to take in following commands:
var action = process.argv[2];
var value = process.argv[3];


// use a switch case to know which function to run
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

	// my tweets: `node liri.js my-tweets`
		// node package loaded: twitter
		// show the last 20 tweets and when they were created
	function myTweets(twitterKeys){
		var client = new Twitter(twitterKeys);
		var params = {screen_name: 'ProjectDemo4'};

		client.get('statuses/user_timeline', params, function(error, tweets, response) {

			var x = tweets.length;

			if (!error) {
				tweets.forEach(function(tweet){
				x = x - 1;

					if(x === 0){
						console.log("\nMy first Tweet!");
					} 
					else if (x < 20){
						console.log("\nTweet " + parseFloat(x + 1));
					};

				console.log(tweet.created_at);
				console.log(tweet.text);
				})

			} else {
				console.log(error);
			  }
		});
	}

	// spotify-this-song:  `node liri.js spotify-this-song '<song name here>'`
		// Node package loaded: node-spotify-api
		// Spotify API's saved in keys.js
	function spotifyThisSong(spotifyKeys, value){
		var spotify = new Spotify({
		  id: spotifyKeys.ID,
		  secret: spotifyKeys.Secret
		});
		 
		spotify.search({ type: 'track', query: value }, function(err, data) {
		
		 
//		console.log(data.tracks.items); 

		// This will show the following info about the song:
			// Artist(s)
			for (var i = 0; i < data.tracks.items.length; i++) {
				if (err) {
		    return console.log('Error occurred: ' + err);
		  } else {
			JSON.parse([i]).forEach(function(property){
				if (!isEmpty(property.artists)){
					console.log("\nArtist Name: " + property.artists);
				}
			});
		}
			} // end for loop


			// Song name
				
			    //console.log("Song Name: " + [i].name);

			// preview link of the song from spotify
		
			    //console.log("Preview Link: " + [i].preview_url);

			// the album the song is from
	
			    //console.log("Album Name: " + [i].album);

			
		}); // end search fuction
		// If no song is provided 
		// then your program will default to 
		// "The Sign" by Ace of Base.




	} // end of function spotify-this-song



	// movie-this: `node liri.js movie-this '<movie name here>'`
		// key recorded in keys.js
		// node package: [Request](https://www.npmjs.com/package/request)

function movieThis(omdbKey, value){
	var searchQueryUrl = "http://www.omdbapi.com/?s=" + value + "&y=&plot=short&apikey=" + omdbKey;
	var titleQueryUrl = "http://www.omdbapi.com/?i=" + imdbID + "&y=&plot=short&tomatoes=true&apikey=" + omdbKey;

	Request(searchQueryUrl, function(error, response, body) { // begin request for list of imdbIDs


		// If the request is successful
		if (!error && response.statusCode === 200) {
			
		// output the following info
		// console.log(JSON.parse(body));

	

		} else {
			console.log(queryUrl);
			console.log(error);
		} // close if/else statement

	}); // end request function
		

	Request(titleQueryUrl, function(error, response, body) {

			// If the request is successful
			if (!error && response.statusCode === 200) {
			
				JSON.parse(body).imdbID.forEach(imdbID, function(){

					// Title of the movie
					console.log("\nTitle: " + property.Title);

					// Year movie came out
					console.log("Year: " + property.Year);

					// IMDB Rating of the movie
					console.log("IMDB Rating: " + property.imdbRating);

					/* Rotton Tomates Rating of the movie
					JSON.parse(body).Ratings.forEach(function(property){
						if (property.Source === "Rotten Tomatoes"){
							console.log("Rotton Tomatoes Rating: " + property.Value);
						}
					});  close rotten tomates forEach loop */

					// Country where movie was produced
					console.log("Produced: " + property.Country);

					// Language of the movie
					console.log("Language: " + property.Language);

					// plot of the movie
					console.log("Plot: " + property.Plot);

					// actors of the movie
					console.log("Actors: " + property.Actors);

				}); // close forEach loop
			} else {
				console.log(error

			}; // close if/else statement
} // end function movie-this


		/* If the user doesn't type a movie in, 
		 the program will output data for the movie 'Mr. Nobody.' */


	// do-what-it-says: `node liri.js do-what-it-says`
		// require fs package
		// retrieve text from random.txt
function doWhatItSays(){

		fs.readFile("random.txt", "utf-8", function(error, data) {

			// If the code experiences any errors it will log the error to the console.
			if (error) {
			return console.log(error);
			}


			// call one of liri's commands
				/* It should run 'spotify-this-song' for "I Want it That Way"
					text can be changed to test out other commands. */


		});


}

// BONUS
	// output data to a file called log.txt

	// append each command to log.txt

	// DO NOT overwrite data with successive commands



/* Example return from spotify 

[{ album:
     { album_type: 'album',
       artists: [Array],
       available_markets: [Array],
       external_urls: [Object],
       href: 'https://api.spotify.com/v1/albums/0m7GzodmVBjFbLdzgHtBet',
       id: '0m7GzodmVBjFbLdzgHtBet',
       images: [Array],
       name: 'Comatised',
       type: 'album',
       uri: 'spotify:album:0m7GzodmVBjFbLdzgHtBet' },
    artists: [ [Object] ],
    available_markets: [ 'CA', 'US' ],
    disc_number: 1,
    duration_ms: 242266,
    explicit: false,
    external_ids: { isrc: 'USMC19989334' },
    external_urls: { spotify: 'https://open.spotify.com/track/7HXeIPrNFNJOZZdRjsMKWT' },
    href: 'https://api.spotify.com/v1/tracks/7HXeIPrNFNJOZZdRjsMKWT',
    id: '7HXeIPrNFNJOZZdRjsMKWT',
    name: 'Northern Star',
    popularity: 4,
    preview_url: null,
    track_number: 9,
    type: 'track',
    uri: 'spotify:track:7HXeIPrNFNJOZZdRjsMKWT' } ]

    */