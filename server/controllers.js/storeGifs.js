const axios = require('axios')

module.exports = {
callForData: async (req,res) => {
try {
  const result  = await axios.get( "https://api.giphy.com/v1/gifs/trending?api_key=W8e4fq5MY5ac4CGmlS7DwQKBXo9JhwAn&limit=25&rating=PG-13")
  console.log(result.data)
    res.status(200).send(result.data)

 
} 
catch (err) {console.error(err);
}
},

storeData: (req,res) => {
    const gifData = callForData()

    console.log(gifData)
}


}