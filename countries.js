var axios  =  require('axios');
const port = 8080;
const apikey = "da2589ff-76cf-4b11-8654-080868ac896b";
axios.get(`https://api.cricapi.com/v1/countries?apikey=${apikey}&offset=0`)
.then((result)=>{
    console.log(result.data.data);
    var data = result.data.data;
    data.forEach(element => {
        console.log("country Name : "+element.name +' - country Flag Src :'+ element.genericFlag+"\n");
      });

}).catch((err)=>{
    console.log(err);
})

