document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.querySelectorAll(".add-to-cart");
    
    cartButton.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });

    // Search functionality
    const searchBar = document.querySelector(".search-bar");
    searchBar.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            alert("Searching for: " + searchBar.value);
        }
    });

    // Navigation menu toggle
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Advertisement interaction
    const shopNowButton = document.querySelector(".shop-now");
    shopNowButton.addEventListener("click", () => {
        alert("Redirecting to promotional products!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Hide advertisement when clicking outside of it and restore background
    document.querySelector(".amazon-background").addEventListener("click", (event) => {
        const ad = document.querySelector(".advertisement");
        const background = document.querySelector(".amazon-screenshot");
        
        if (!ad.contains(event.target)) {
            ad.style.display = "none";
            background.style.opacity = "1"; // Restore background visibility
        }
    });
});

