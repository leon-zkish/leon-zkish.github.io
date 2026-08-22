class ZkishFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
			#footer {margin-top: auto;text-align: center;}#footer p {color: black;font-family: Consolas, monospace;}#footer select {font-family: Consolas, monospace;}
		</style>
		<div id="footer">
            <a href="/thrashpanda"><img src="https://leon-zkish.github.io/RACC.png"alt="THRASH PANDA, ALWAYS LITTERING"style="width:132px; min-width:132px;"></a>
            <p>Looking for something?</p>
            <form>
                <select id="frameworks">
                    <option>[[[???]]]</option>
                    <option value="/index.html">ZKISH</option>
                    <option value="/portfolio">Portfolio</option>
                    <option value="/consume">Consume</option>
                    <option value="/contact">Contact</option>
                </select>
            </form>
            <p style="font-size:0.8em;">
                Artworks, renders, models and all content present on this website
                made and owned by © Luciano León, ZKISH.
            </p>
        </div>`;
        const selector = this.querySelector("#frameworks");
        selector.addEventListener("change", () => {
            if (selector.value) {
                window.location.href = selector.value;
            }
        });
    }
}
customElements.define("zkish-footer", ZkishFooter);