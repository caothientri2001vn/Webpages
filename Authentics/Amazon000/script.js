document.addEventListener("DOMContentLoaded", () => {
    const advertisement = document.getElementById("advertisement");
    const backgroundImage = document.querySelector(".amazon-screenshot");
    const closeBtn = document.getElementById("close-popup");
    const form = document.getElementById("ad-form");

    // Hiện popup ngay khi trang tải
    advertisement.classList.remove("hidden");
    backgroundImage.style.opacity = "0.2";

    // Đóng popup
    function closePopup() {
        advertisement.classList.add("hidden");
        backgroundImage.style.opacity = "1";
    }

    // Khi nhấn X
    closeBtn.addEventListener("click", closePopup);

    // Khi submit form
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const timestamp = new Date().toISOString();

        alert("Success! Continue your shopping journey on Amazon.com and enjoy special deals just for you.");
        closePopup();
    });
});
