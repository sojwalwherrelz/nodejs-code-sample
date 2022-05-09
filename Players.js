var axios  =  require('axios');
const port = 8080;
const apikey = "%APIKEY%";
axios.get(`https://api.cricapi.com/v1/players?apikey=${apikey}&offset=0`)
.then((result)=>{    
    var data = result.data.data;
    console.log("Players Info..............................................");
    data.forEach(data => {
        console.log("Name  - "+data.name+" Country - " +data.country);
    });
       
}).catch((err)=>{
    console.log(err);
})

