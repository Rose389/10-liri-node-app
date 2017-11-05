# SIRI-ously Node

### Overview

Create a SIRI clone; however, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

### Before Running App

1. You will need API keys for Twitter, Spotify, and OMDB.  Put these in the JavaScript file named `keys.js`. 

2. Run npm install

3. To run app you will need to input a command and, if applicable, a search parameter.


### Commands

1. `node liri.js my-tweets`

   * This will display your last 20 tweets and when they were created_at in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify (if available)
     * The album that the song is from

   * If no song is provided, the information for "The Sign" by Ace of Base will be displayed in the terminal/bash window.


3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

     * If no movie is provided, the information for the movie 'Mr. Nobody' will be displayed in the terminal/bash window.


4. `node liri.js do-what-it-says`
   
   * This retrieves the text from 'random.txt' and runs the app using the found data.

     * Feel free to change the text in that document to test out the feature for other commands.

