// TODO: Grab keys from keys.js
var keys = require("./keys.js");

// take the following commands:
// my-tweets --> show your last 20 tweets with creation time
if (process.argv[2] === "my-tweets") {
    var twitter = require('twitter');
    var twitterKeys = keys.twitterKeys;
    var client = new twitter(twitterKeys);
    var params = {screen_name: 'RealDrGonzo', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
            }
        }
    });
}
// spotify-this-song --> add argument '<song name>'; show the Artist(s), song name, preview link of the song from Spotify, the album the song is from. If no song specified, default to "The Sign" by Ace of Base.
else if (process.argv[2] === "spotify-this-song") {
    var spotifyKeys = keys.spotifyKeys;
}
// movie-this -->  add argument '<movie name>'; show the movie title, year of release, IMDB rating, Rotten Tomatoes Rating, country of origin, language, plot, and actors in movie. If no movie specified, choose "Mr. Nobody."
else if (process.argv[2] === "movie-this") {
    omdbKey = keys.omdbKey;
}
// do-what-it-says
