var axios  =  require('axios');
const port = 8080;
const apikey = "da2589ff-76cf-4b11-8654-080868ac896b";
axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${apikey}&offset=0`)
.then((result)=>{
    var data = result.data.data;
    console.log("Current Match Information..............................................");
    data.forEach(element => {
        console.log("country Name - "+element.name +' - matchType -'+ element.matchType+" series_id - "+element.series_id + "status - "+element.status+" Venue - "+element.venue+"date - "+element.date+"data GMT"+element.dateTimeGMT+"\n");
      });

}).catch((err)=>{
    console.log(err);
})

