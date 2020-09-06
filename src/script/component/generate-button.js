class GenerateButton extends HTMLElement {
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
	
	render(){
		this.innerHTML = `
		<button class="btn btn-lg btn-success btn-generate" id="btn-generate">Generate another joke</button>
		`;
		this.querySelector("#btn-generate").addEventListener("click", this._clickEvent);
	}
}

customElements.define("generate-button", GenerateButton);