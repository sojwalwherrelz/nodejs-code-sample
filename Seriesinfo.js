var axios  =  require('axios');
const port = 8080;
const id="ce731721-f991-4749-94fe-70a5902fde4c";
const apikey = "%APIKEY%";
axios.get(`https://api.cricapi.com/v1/series_info?apikey=${apikey}&offset=0&id=${id}`)
.then((result)=>{    
    var data = result.data.data.info;
    console.log("Details of Series Info..............................................");
        console.log("name - "+data.name)
        console.log("enddate - "+data.enddate)
        console.log("startdate - "+data.startdate)
        console.log("odi - "+data.odi)
        console.log("squads"+data.squads)
        console.log("t20 - "+data.t20)
        console.log("test -"+data.test)
}).catch((err)=>{
    console.log(err);
})

