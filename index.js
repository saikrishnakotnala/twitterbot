console.log('the bot is starting');
var Twit = require('twit');
 var config =require('./config');

T = new Twit(config);


var stream = T.stream('user');

stream.on('follow',followed);

function followed(eventMsg){
    console.log("follow event");
     
    var fs=require('fs');
    var json = JSON.stringify(eventMsg,null,2);
    fs.writeFile("tweet.json",json);
    
    var name = eventMsg.source.name;
      var screenName = eventMsg.source.screen_name;
   // tweetpost('.@' + screenName + ' thank you!!!!');
}



//tweetpost();
//setInterval(tweetpost,1000*20);




function tweetit(){
var params = {
    q: 'saikrishna',
    count: 2 
}
T.get('search/tweets',params,gotData);
      
function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i=0; i <tweets.length;i++){
          console.log(tweets[i].text);
    }
}
}

function tweetpost(txt){
    var r =Math.floor(Math.random()*100);


var tweet = {
    status:txt
}
T.post('statuses/update', tweet, tweeted);
function tweeted(err,data,response){
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log("working");
    }
}
}