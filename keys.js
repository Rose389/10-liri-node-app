//JavaScript

// bug check to make sure file is accessible
console.log("The file keys.js is loaded.");


// variable to hold twitter API keys
var twitterKeys = {
  consumer_key: "lMgymAAMNe8VGqS7A8TSAu6hQ",
  consumer_secret: "ep39B0z8yYlObvf0LCNOiaJJjJQIueQOqZCjsEXKKuDMtoRL1G"
,
  access_token_key: "913537585326170112-fmSrFH1UrvsMJDz6DCtUPrBUwop2IMU",
  access_token_secret: "pab1NVRjfgPsKzJsJsiejoUHp5M0pUlUIix6J0TRFB8G1",
};

// variable to hold spotify API keys
var spotifyKeys ={
	ClientID: "d419c7f0be554a65b021bd015491b439",
	ClientSecret: "5f0cb65335594095ba2ea24315b35da6"
};

// variable to hold omdb API key
var omdbKey = "40e9cece";



// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

module.exports = {
	twitterKeys: twitterKeys,
	spotifyID: spotifyKeys.ClientID,
	spotifySecret: spotifyKeys.ClientSecret,
	omdbKey: omdbKey,
}
