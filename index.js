console.log('The follow bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);



tweetpost();
setInterval(tweetIt, 1000*40);





function tweetpost() {
       
	var r = Math.floor(Math.random()*100);

	var tweet = {
	  status: 'random number ' + r + ' #chinnu_twitter_bot'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wwrong!");
	  } else {
	    console.log("It worked!");
	  }
	}
}