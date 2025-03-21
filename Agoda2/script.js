function createPopupAd() {
    if (document.getElementById('popupAd')) return;

    // Create overlay
    let overlay = document.createElement("div");
    overlay.id = "popupOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    overlay.style.display = "none";
    document.body.appendChild(overlay);

    // Create pop-up
    let popup = document.createElement("div");
    popup.id = "popupAd";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "rgb(0, 0, 0)";
    popup.style.padding = "20px";
    popup.style.textAlign = "center";
    popup.style.width = "clamp(200px, 25vw, 400px)"; // Responsive width
    popup.style.borderRadius = "15px";
    popup.style.color = "rgb(255, 0, 0)";
    popup.style.fontFamily = "'Arial', sans-serif";
    popup.style.boxShadow = "0px 5px 15px rgb(198, 4, 4)";
    popup.style.border = "4px solid rgb(198, 4, 4)";
    popup.style.zIndex = "1000";
    popup.style.display = "none";
    popup.style.animation = "fadeIn 0.5s ease-in-out";

    // Close button
    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "15px";
    closeBtn.style.fontSize = "28px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.color = "white";
    closeBtn.style.fontWeight = "bold";
    closeBtn.onclick = function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    };

    // Advertisement content
    let adContent = document.createElement("div");
    adContent.innerHTML = `
        <h2 style="margin-bottom: 10px;">🔥 Special Limited Offer! 🔥</h2>
        <p>Get 50% OFF on our premium plans.</p>
        <a href="https://example.com" target="_blank" 
           style="display: inline-block; background-color: black; padding: 15px 30px; 
           font-size: 1.2em; font-weight: bold; border-radius: 10px; text-decoration: none; 
           color: rgb(255, 0, 0); box-shadow: 0px 5px 15px rgb(198, 4, 4); transition: all 0.3s ease;"
           onmouseover="this.style.transform='scale(1.2)'; this.style.backgroundColor='rgb(198, 4, 4)'; this.style.color='black';"
           onmouseout="this.style.transform='scale(1)'; this.style.backgroundColor='black'; this.style.color='rgb(255, 0, 0)';">
           Shop Now
        </a>
    `;

    // Append elements
    popup.appendChild(closeBtn);
    popup.appendChild(adContent);
    document.body.appendChild(popup);

    // Show pop-up after a delay
    setTimeout(() => {
        overlay.style.display = "block";
        popup.style.display = "block";
    }, 3000); // 3-second delay
}

// Run when the page loads
window.onload = createPopupAd;
