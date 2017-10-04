// File for slacking code to the TA's


// working on the bonus to log output in external file.
// I started with my-tweets because it doesn't call my printInfo function, making it easier to test.

// issue one - getting the "new request" fs to print first, 
//	also it shows as undefined in the console, but not in log.txt

/* issue two - the forEach fs shows in the console, but not in the log.txt instead I get the following:

NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:[object Object][object Object][object Object][object Object][object Object][object Object]NEW REQUEST:243051NEW REQUEST:3451025NEW REQUEST:431024NEW REQUEST:5321066NEW REQUEST:6666NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:NEW REQUEST:
*/

function myTweets(twitterKeys){
		var client = new Twitter(twitterKeys);
		var params = {
			screen_name: 'ProjectDemo4',
			sort_by: 'created_at-desc',
			count: 20
		};


		client.get('statuses/user_timeline', params, function(error, tweets, response) {



			if (!error) {

				fs.appendFile("log.txt", "NEW REQUEST:", function (err, data){
					if (err) {
						return console.log(err);
					}
					console.log("\n---------\n" + data);
				});
			
			var x = tweets.length;

				tweets.forEach(function(tweet){

					fs.appendFile("log.txt", "", function (err, data){

					x = x - 1;
						if (err) {
							return console.log(err);
						}
						if(x === 0){
							console.log("\nMy first Tweet!");
						} 
							else if (x < 20){
								console.log("\nTweet " + parseFloat(x + 1));
							};
						console.log(tweet.created_at);
						console.log(tweet.text);

					}); // end write to file function

				}); // end tweets.forEach

			} 
			else {
				console.log(error);
			} // end if / else statement

		}); // end get request

	}; // end myTweets()