import './joke-single.js';
import './joke-twopart.js';
class JokeItem extends HTMLElement {
	
	constructor(){
		super()
		this._joke = [];
	}
	
	set joke(joke) {
		this._joke = joke;
		this.render()
		
	}
	
	set loadEvent(event) {
		this._loadEvent = event;
		this.render();
	}

	renderError(message) {
		this.innerHTML = "";
		this.innerHTML += `<h2>${message}</h2>`;
	}
	
	render() {
		addEventListener("DOMContentLoaded", this._loadEvent);
		this.innerHTML = ""
		if (this._joke.hasOwnProperty('setup')){
			const jokeItemElement = document.createElement("joke-twopart");
			jokeItemElement.joke = this._joke
			this.appendChild(jokeItemElement)
		} else {
			const jokeItemElement = document.createElement("joke-single");
			jokeItemElement.joke = this._joke
			this.appendChild(jokeItemElement)
		}
	}
}
customElements.define("joke-item", JokeItem);