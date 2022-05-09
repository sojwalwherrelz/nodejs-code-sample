var axios  =  require('axios');
const port = 8080;
const apikey = "da2589ff-76cf-4b11-8654-080868ac896b";
axios.get(`https://api.cricapi.com/v1/series?apikey=${apikey}&offset=0`)
.then((result)=>{
    var data = result.data.data;
    data.forEach(element => {
        console.log("Name :" +element.name);
        console.log("startDate :" +element.startDate);
        console.log("End Date :" +element.endDate);
        console.log("odi :" +element.odi);
        console.log("t20 :" +element.t20);
        console.log("test :" +element.test);
        console.log("squads :" +element.squads);
        console.log("matches :" +element.matches);
        console.log("----------------------------------------------------------------");
    })

}).catch((err)=>{
    console.log(err);
})

