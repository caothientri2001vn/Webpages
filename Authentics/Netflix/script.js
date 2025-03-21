document.addEventListener("DOMContentLoaded", () => {
    const advertisement = document.getElementById("advertisement");
    const backgroundImage = document.querySelector(".amazon-screenshot");
    const closeBtn = document.getElementById("close-popup");

    // Show the pop-up after 3 seconds
    // setTimeout(() => {
    //     advertisement.classList.remove("hidden");
    //     backgroundImage.style.opacity = "0.3"; // Dim background
    // }, 3000);

    // Close pop-up function
    function closePopup() {
        advertisement.classList.add("hidden"); // Hide ad
        backgroundImage.style.opacity = "1"; // Restore background
    }

    // Event listener for the close button
    closeBtn.addEventListener("click", closePopup);
});
