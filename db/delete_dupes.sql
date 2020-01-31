
DELETE FROM giphy_api_data a
USING giphy_api_data b 
WHERE a.call_id < b.call_id
AND a.gif_id = b.gif_id;

SELECT * FROM giphy_api_data;