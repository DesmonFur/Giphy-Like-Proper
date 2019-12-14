INSERT INTO giphy_api_data (gif_id,gif_url,gif_title,rating)
VALUES ($1,$2,$3,$4)
RETURNING *;
 