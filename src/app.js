const path = require("path");
const express = require("express");
const forecast = require("./utils/forecast");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>');
// });

app.get('/help', (req, res) => {
    res.send([{
        name:'sachin',
        age:'26'
    }]);
})

app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>');
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide address",
    });
  }
  const address = req.query.address;
  res.send({
    forecast: 'forecast',
    location: 'location',
    address: address,
  });
  
  // forecast(address, address, (error, data) => {
  //     if(error){
  //         return res.send({
  //             error
  //         })
  //     }
  //     res.send({
  //         forecast: data.forecast,
  //         location: data.location,
  //         address: address
  //     })
  // })
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
