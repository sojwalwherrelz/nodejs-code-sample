var axios  =  require('axios');
const port = 8080;
const id = "dd5dcdcd-f09b-4a44-a50e-12f52d9d3d8c";
const apikey = "%APIKEY%";
axios.get(`https://api.cricapi.com/v1/match_squad?apikey=${apikey}&offset=0&id=${id}`)
.then((result)=>{
    var data = result.data.data;
    console.log("Fanatcy Squad..............................................");
    data.forEach(element => {
        element.players.forEach(player => {
            console.log("Name :" +player.name);
            console.log("role :" +player.role);
            console.log("battingStyle :" +player.battingStyle);
            console.log("bowlingStyle :" +player.bowlingStyle);
            console.log("country :" +player.country);
            console.log("playerImg :" +player.playerImg);
        });
      });

}).catch((err)=>{
    console.log(err);
})

