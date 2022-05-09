var axios  =  require('axios');
const port = 8080;
const id = "77da5a6d-7c67-4a76-9d24-709ba6e5e1d8";
const apikey = "%APIKEY%";
axios.get(`https://api.cricapi.com/v1/players_info?apikey=${apikey}&offset=0&id=${id}`)
.then((result)=>{
    var data = result.data.data;
    console.log("Player Information..............................................");
   console.log("Name -"+data.name);
   console.log("dateOfBirth -"+data.dateOfBirth);
   console.log("role -"+data.role);
   console.log("battingStyle -"+data.battingStyle);
   console.log("bowlingStyle -"+data.bowlingStyle);
   console.log("placeOfBirth -"+data.placeOfBirth);
   console.log("country -"+data.country);
   console.log("playerImg -"+data.playerImg);

}).catch((err)=>{
    console.log(err);
})

