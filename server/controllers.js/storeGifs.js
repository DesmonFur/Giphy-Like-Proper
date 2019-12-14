const axios = require("axios");

module.exports = {
  callForData: async (req, res) => {
    try {
      const db = req.app.get("db");
      const result = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=W8e4fq5MY5ac4CGmlS7DwQKBXo9JhwAn&limit=50&rating=R"
      );
      console.log(result.data.data);
      console.log(
        result.data.data.map(gif => {
          db.create_giphy_data([
            gif.id,
            gif.images.original.url,
            gif.title,
            gif.rating
          ]);
        })
      );
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
