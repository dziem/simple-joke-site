class JokeTwopart extends HTMLElement {
	constructor(){
		super()
	}
	
	set joke(joke) {
		this._joke = joke;
		this.render()
	}
	
	render(){
		this.innerHTML = `
			<div class="setup">
				<h4>${this._joke.setup}</h4>
			</div>
			<button onclick="showDelivery()" class="btn btn-sm btn-warning">Show Punchline</button>
			<div class="delivery">
				<h2>${this._joke.delivery}</h2>
			</div>
			`;
	}
}

customElements.define("joke-twopart", JokeTwopart);