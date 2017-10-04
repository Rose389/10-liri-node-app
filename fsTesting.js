// node packages loaded
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var Request = require("request");

// code to retrieve data from keys.js
var keys = require("./keys.js");
// store keys in a variable
var twitterKeys = keys.twitterKeys;
var spotifyKeys = {
	ID: keys.spotifyID,
	Secret: keys.spotifySecret
};
var omdbKey = keys.omdbKey;


// make able to take in following commands:
var action = process.argv[2];
var value = process.argv[3];
var queryUrl = "";


// use a switch case to know which function to run
switch (action) {
  case "my-tweets":
    myTweets(twitterKeys);
    break;

  case "spotify-this-song":
    spotifyThisSong(spotifyKeys, value);
    break;
    
  case "movie-this":
    movieThis(omdbKey, value);
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}



function printInfo(body){

	if (action === "movie-this") {
		// Title of the movie
		console.log("\n\nTitle: " + "\n   " + JSON.parse(body).Title);
		// Year movie came out
		console.log("\nYear: " +  "\n   " + JSON.parse(body).Year);
		// IMDB Rating of the movie
		console.log("\nRatings: " + "\n   IMDB: " + JSON.parse(body).imdbRating);
		// Rotton Tomates Rating of the movie
		JSON.parse(body).Ratings.forEach(function(property){
			if (property.Source === "Rotten Tomatoes"){
				console.log("   Rotten Tomatoes: " + property.Value);
			}
		}); 
		// Country where movie was produced
		console.log("\nProduced: " +  "\n   " + JSON.parse(body).Country);
		// Language of the movie
		console.log("\nLanguage: " +  "\n   " + JSON.parse(body).Language);
		// plot of the movie
		console.log("\nPlot: " +  "\n   " + JSON.parse(body).Plot);
		// actors of the movie
		console.log("\nActors: " +  "\n   " + JSON.parse(body).Actors);
	}

	else if (action === "spotify-this-song" || "do-what-it-says") {
		
		for(var i = 0; i < body.tracks.items.length; i++) {
			// Get Artist(s) name(s)
		    for (var a = 0; a < body.tracks.items[i].artists.length; a++){
		 		// Default Artist(s) name(s)
		 		console.log("\nArtist(s) Name: " +   "\n   " + body.tracks.items[i].artists[a].name);
		 	}
			// Song name
		    console.log("Song Name: " +   "\n   " + body.tracks.items[i].name);
			// preview link of the song from spotify
		    console.log("Preview Link: " +   "\n   " + body.tracks.items[i].preview_url);
			// the album the song is from 
		    console.log("Album Name: " +   "\n   " + body.tracks.items[i].album.name);
		}

	}
} // end printInfo()

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

		// If no song is provided 
		// then your program will default to 
		// "The Sign" by Ace of Base.
		if (process.argv.length === 3) {

		spotify.search({ type: 'track', query: "the sign ace of base", limit: 1}, function(err, data) {
				
				var body = data;
				printInfo(body);

		}); // end default request 

	} else {

		spotify.search({ type: 'track', query: value, limit: 3}, function(err, data) {
			
				var body = data;
				printInfo(body);

		}); // end user input request

	  }

	} // end function spotify-this-song



	// movie-this: `node liri.js movie-this '<movie name here>'`
		// key recorded in keys.js
		// node package: [Request](https://www.npmjs.com/package/request)

function movieThis(omdbKey, value){

	queryUrl =  "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=" + omdbKey;

	if (process.argv.length === 3) {

		queryUrl =  "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=" + omdbKey;

		Request(queryUrl, function(error, response, body) {
			
			// If the request is successful
			if (!error && response.statusCode === 200) {
				
			// output the following info
			printInfo(body);

			} else {
				console.log(queryUrl);
				console.log(error);
			} // close if statement for request

		}); // end request function default

	} else {

		Request(queryUrl, function(error, response, body) {
			
			// If the request is successful
			if (!error && response.statusCode === 200) {
				
			// output the following info
			// console.log(JSON.parse(body));
			printInfo(body);
				

			} else {
				console.log(queryUrl);
				console.log(error);
			} // close if statement for request

		}); // end request function search
	
	} // close if statement
		
}; // end function movie-this


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
			value = "i want it that way";

			spotifyThisSong(spotifyKeys, value);

		});


}
/*
// BONUS
	// output data to a file called log.txt
	// append each command to log.txt
	// DO NOT overwrite data with successive commands

fs.appendFile("log.txt", printInfo(body), function(err) {

  // If an error was experienced we say it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "the following content was added=" to our node console.
  else {
    console.log("Content Added!");
  }

});
*/
function parsing(body){
	this.body = body;
	this.result = JSON.parse(body);
}

function Movie(body){
	
	this.title = title;
	this.year = year;
	this.imdb = imdb;
	this.tomatoes = function(){
		JSON.parse(body).Ratings.forEach(function(property){
			if (property.Source === "Rotten Tomatoes"){
				console.log("   Rotten Tomatoes: " + property.Value);
			} 
		}); 
	};
	this.country = country;
	this.language = language;
	this.plot = plot;
	this.actors = actors;
	this.printResults = function(){
		// Title of the movie
		console.log("\n\nTitle: " + "\n   " + JSON.parse(body).Title);
		// Year movie came out
		console.log("\nYear: " +  "\n   " + JSON.parse(body).Year);
		// IMDB Rating of the movie
		console.log("\nRatings: " + "\n   IMDB: " + JSON.parse(body).imdbRating);
		// Rotton Tomates Rating of the movie
		console.log(this.tomatoes);
		// Country where movie was produced
		console.log("\nProduced: " +  "\n   " + JSON.parse(body).Country);
		// Language of the movie
		console.log("\nLanguage: " +  "\n   " + JSON.parse(body).Language);
		// plot of the movie
		console.log("\nPlot: " +  "\n   " + JSON.parse(body).Plot);
		// actors of the movie
		console.log("\nActors: " +  "\n   " + JSON.parse(body).Actors);
	};
	this.logResults = function(){
		console.log("You haven't beat me yet!")
	};
	this.attack = function(){

	};
	this.levelUp = function(){

	};
};

var print = new Movie(body);

print.printResults();