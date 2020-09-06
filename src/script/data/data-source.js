class DataSource{
	static searchJoke(keyword) {
		let url;
		if (keyword == ''){
			url = 'https://sv443.net/jokeapi/v2/joke/Any'
		} else {
			url = `https://sv443.net/jokeapi/v2/joke/Any?contains=${keyword}`
		}
		return fetch(url)
		.then(response => {
			return response.json();
		})
       .then(responseJson => {
			if(!responseJson.error) {
				return Promise.resolve(responseJson);
			} else {
				return Promise.reject(`No joke found for keyword ${keyword}`);
			}
		})
   }
};
export default DataSource;