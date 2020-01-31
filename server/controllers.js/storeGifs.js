const axios = require("axios");
const { API_KEY } = process.env;
module.exports = {

deleteDupes: async (req,res) => {

  try {


    const db = req.app.get('db')
    const deletions = await db.delete_dupes([])
    
    res.status(200).send(deletions)
  } catch (err){
    console.log(err)
  }
},

  callForData: async (req, res) => {
    try {
      const db = req.app.get("db");
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
      );
      // console.log(result.data.data);

      result.data.data.map(gif => {
        db.create_giphy_data([
          gif.id,
          gif.images.original.url,
          gif.title,
          gif.rating
        ]);
      });
      res.status(200).send(result.data.data[0]);
    } catch (err) {
      console.error(err);
    }
  },

  getGifs: async (req, res) => {
    const db = req.app.get("db");

    const gifs = await db.get_gifs_data([]);
    res.status(200).send(gifs);
  }
};
