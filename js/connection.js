class ZkishConnection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .connection-box {position: fixed;top: 4px;left: 4px;background: #111;color: white;padding: 8px 16px;border: 1px solid #6b00a1;border-radius: 5px;font-family: Consolas, monospace;font-size: 12px;z-index: 9999;
            }
        </style>
        <div class="connection-box">
            Connection: Checking...
        </div>`;
        const box = this.querySelector(".connection-box");
        async function checkConnection() {
            const start = performance.now();
            try {
                await fetch(window.location.href + "?ping=" + Date.now(), {cache: "no-store"});
                const ms = Math.round(performance.now() - start);
                let status;
                if (ms < 80)
					{status = "ZKISH.net: CONNECTED";
                } else if (ms < 180)
					{status = "ZKISH.net: LOW LATENCY";
                } else if (ms < 400)
					{status = "ZKISH.net: HIGH LATENCY (SLOW)";
                } else
					{status = "ZKISH.net: UNSTABLE";}

                box.textContent = `Connection: ${ms}ms - ${status}`;
            } catch {box.textContent = "ZKISH.net: OFFLINE";}
        }
        checkConnection();
        setInterval(checkConnection, 250);
    }
}

customElements.define("zkish-connection", ZkishConnection);
