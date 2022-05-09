var axios  =  require('axios');
const port = 8080;
const apikey = "da2589ff-76cf-4b11-8654-080868ac896b";
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

