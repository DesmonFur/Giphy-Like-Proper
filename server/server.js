const express = require("express");
const massive = require("massive");
const cors = require('cors')
require("dotenv").config();
const app = express();
const fetching = require('./controllers.js/storeGifs')
const { CONNECTION_STRING, PORT} = process.env;

app.use(express.json())
app.use(cors())

app.get('/api/getGifs', fetching.getGifs)
app.post('/api/storeData', fetching.callForData)



massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    app.listen(PORT, () =>
      console.log(`'DINGLEBERRY CLYDI RUNNNI ${PORT} FLIES`)
    );
  });