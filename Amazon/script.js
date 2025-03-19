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
