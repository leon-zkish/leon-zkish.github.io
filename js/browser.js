class ZkishBrowser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            #redirectForm {display: inline-flex; gap: 5px;}
            #searchContainer {position: relative; display: inline-block;}
            #errorPopup {display: none; position: absolute; left: calc(100% + 10px); top: 50%; transform: translateY(-50%); background: #ff3333; color: white; padding: 8px 14px; border-radius: 4px; font-family: Consolas, monospace; white-space: nowrap;}
        </style>
        <div style="text-align:center;">
            <div id="searchContainer">
                <form id="redirectForm">
                    <input type="text" id="redirectInput" placeholder="Insert input..." autocomplete="off">
                    <button type="submit">Go</button>
                </form>
                <div id="errorPopup">[404: Invalid input!]</div>
            </div>
        </div>`;
        const form = this.querySelector("#redirectForm");
        const input = this.querySelector("#redirectInput");
        const popup = this.querySelector("#errorPopup");
        const redirects = {
            home: "/home",
            contact: "/contact", talk2me: "/contact",
            discord: "https://discord.com/invite/QDxdMqvzKG", server: "https://discord.com/invite/QDxdMqvzKG",
            thrashpanda: "/thrashpanda", raccoon: "/thrashpanda", racc: "/thrashpanda",
			"radio": "/radio", "thrash panda radio": "/radio", 
			cd: "/consume", disc: "/consume", disk: "/consume", consume: "/consume", products: "/consume", shirts: "/consume", merch: "/consume", dormitabis: "/consume", album: "/consume", discs: "/consume", disks: "/consume",  "disk a": "/consume", "disk b": "/consume", buy: "/consume", store: "/consume",
			ZKISHWARE: "/ZKISHWARE", plugins: "/ZKISHWARE", drumkits: "/ZKISHWARE", "plugin": "/ZKISHWARE", drumkit: "/ZKISHWARE", kit: "/ZKISHWARE", kits: "/ZKISHWARE",
			"talk to the mask": "/talk2themask", "talk 2 the mask": "/talk2themask", "bring me to the mask": "/talk2themask", "bring me 2 the mask": "/talk2themask", talktothemask: "/talk2themask", talk2themask: "/talk2themask", bringmetothemask: "/talk2themask", bringme2themask: "/talk2themask",
            "62": "https://weedplaya62.com", weedplaya: "https://weedplaya62.com", weedplaya62: "https://weedplaya62.com", "weedplaya62.com": "weedplaya62.com"
        };
        const customMessages = {
            buaj: "Ew.",
			blagh: "Better.",
            playa: "weedplaya62.com",
            show: "Soon.",
            adxmz: "#FreeAdxmz",
            zkish: "Are you not already here?"
        };
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const value = input.value.trim().toLowerCase();
            if (redirects[value]) {
                popup.style.display = "none";
                window.location.href = redirects[value];
            } else {
                popup.textContent = customMessages[value] ?? "[404: Invalid input!]";
                input.value = "";
                popup.style.display = "block";

                setTimeout(() => {
                    popup.style.display = "none";
                }, 2000);
            }
        });
        input.addEventListener("input", () => {
            popup.style.display = "none";
        });
    }
}
customElements.define("zkish-browser", ZkishBrowser);
