
create table giphy_api_data (
    call_id SERIAL PRIMARY KEY,
	gif_id VARCHAR(9999),
	gif_url VARCHAR(9999),
	gif_title VARCHAR(50),
	rating VARCHAR(50)
);
insert into giphy_api_data (gif_id, gif_url, gif_title, rating) values (1, 'Brit', 'Beart', 'AM');