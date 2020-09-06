//import './fact-item.js';
class JokeSingle extends HTMLElement {
	constructor(){
		super()
	}
	
	set joke(joke) {
		this._joke = joke;
		this.render()
	}
	
	render() {
		this.innerHTML = `
			<h2>${this._joke.joke}</h2>
			`;
	}
}
customElements.define("joke-single", JokeSingle);