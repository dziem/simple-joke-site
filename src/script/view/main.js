import '../component/joke-item.js';
import '../component/search-bar.js';
import '../component/generate-button.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const jokeItemElement = document.querySelector("joke-item");
    const genearateElement = document.querySelector("generate-button");
	
	const onFirstLoad = async () => {
        try{
			const result = await DataSource.searchJoke('');
			renderResult(result);
		} catch (message) {
			fallbackResult(message)
		}
    };
	
	const onButtonGenerateClicked = async () => {
        try{
			const result = await DataSource.searchJoke('');
			renderResult(result);
		} catch (message) {
			fallbackResult(message)
		}
    };
	
    const onButtonSearchClicked = async () => {
        try{
			const result = await DataSource.searchJoke(searchElement.value);
			renderResult(result);
		} catch (message) {
			fallbackResult(message)
		}
    };

    const renderResult =  results => {
        jokeItemElement.joke = results;
    };

    const fallbackResult =  message => {
        jokeItemElement.renderError(message);
    };
	
	jokeItemElement.loadEvent = onFirstLoad;
	genearateElement.clickEvent = onButtonGenerateClicked;
    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;