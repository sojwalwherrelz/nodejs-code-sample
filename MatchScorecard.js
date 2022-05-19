var axios  =  require('axios');
const port = 8080;
const apikey = "da2589ff-76cf-4b11-8654-080868ac896b";
const id   = "fc4a5881-fb19-4d21-933c-45e913dc0d3c"

axios.get(`https://api.cricapi.com/v1/match_scorecard?apikey=${apikey}&offset=0&id=${id}`)
.then((result)=>{    

    
    console.log("Name" + result.data.data.name);
    console.log("matchType" + result.data.data.matchType);
    console.log("status" + result.data.data.status);
    console.log("venue" + result.data.data.venue);
    console.log("date" + result.data.data.date);
    console.log("dateTimeGMT" + result.data.data.dateTimeGMT);
    console.log("tossWinner" + result.data.data.tossWinner);
    console.log("tossChoice" + result.data.data.tossChoice);
    console.log("matchWinner" + result.data.data.matchWinner);
    console.log("series_id" + result.data.data.series_id);
    result.data.data.teamInfo.forEach(res => {
        console.log("name" + res.name);
        console.log("shortname" + res.shortname);
        console.log("img" + res.img);
    });
       
}).catch((err)=>{
    console.log(err);
})

