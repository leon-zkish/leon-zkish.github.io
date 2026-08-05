class ZkishBrowser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="text-align:center;">
                <div id="searchContainer" style="position:relative; display:inline-block;">
                    <form id="redirectForm">
                        <input type="text" id="redirectInput" placeholder="Insert input..." autocomplete="off">
                        <button type="submit">Go</button>
                    </form>
                    <div id="errorPopup">[404: Invalid input!]</div>
                </div>
            </div>
        `;
        const form = this.querySelector("#redirectForm");
        const input = this.querySelector("#redirectInput");
        const popup = this.querySelector("#errorPopup");
        const redirects = {
            home: "/",
            contact: "/contact",
            discord: "https://discord.com/invite/QDxdMqvzKG",
            server: "https://discord.com/invite/QDxdMqvzKG",
            thrashpanda: "/thrashpanda",
            raccoon: "/thrashpanda",
            racc: "/thrashpanda",
            "62": "https://weedplaya62.com",
            weedplaya: "https://weedplaya62.com",
            weedplaya62: "https://weedplaya62.com"
        };
        const customMessages = {
            buaj: "ew.",
            skibidi: "Absolutely not.",
            raccoon: "🦝 ALWAYS LITTERING.",
            help: "No.",
            adxmz: "#FreeAdxmz",
            nigga: "Bro 😭",
            bitch: "Real.",
            zkish: "You're already here."
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