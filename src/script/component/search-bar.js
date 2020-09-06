class SearchBar extends HTMLElement {
	constructor(){
		super()
	}
	
	connectedCallback(){
		this.render()
	}
	
	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}
	
	get value() {
		return this.querySelector("#searchElement").value;
	}
	
	render(){
		this.innerHTML = `
		<h2 class="text-center">Search for a specific joke that contains this search string</h2>
		<form>
			<div class="input-group input-group-lg mb-3">
				<input type="text" class="form-control" id="searchElement" placeholder="e.g. cat" aria-describedby="searchButtonElement2" required>
				<div class="input-group-append">
					<button class="btn btn-secondary" type="button" id="searchButtonElement">Search</button>
				</div>
			</div>
		</form>
		`;
		this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
	}
}

customElements.define("search-bar", SearchBar);