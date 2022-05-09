var axios  =  require('axios');
const port = 8080;
const id = "dd5dcdcd-f09b-4a44-a50e-12f52d9d3d8c";
const apikey = "%APIKEY%";
axios.get(`https://api.cricapi.com/v1/match_points?apikey=${apikey}&offset=0&id=${id}`)
.then((result)=>{
    console.log(result.data.data);
    var data = result.data.data;
    var innings = data.innings;
    console.log("Match Point..............................................");
    innings.forEach(element => {
        console.log("Innings  - "+element.inning);
        console.log("batting results...........................................");
        element.batting.forEach(batting => {
            console.log("Name - "+batting.name)
            console.log("points  - "+batting.points)
         });
         console.log("Bowling results...........................................");
         element.bowling.forEach(bowling => {
            console.log("Name - "+bowling.name)
            console.log("points  - "+bowling.points)
         });
         console.log("catching results...........................................");
         element.catching.forEach(catching => {
            console.log("Name - "+catching.name)
            console.log("points  - "+catching.points)
         });

      });

}).catch((err)=>{
    console.log(err);
})

