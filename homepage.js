document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContainer = document.querySelector('.dropdown-container');

    // Toggle dropdown when clicking the button
    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        dropdownContainer.classList.toggle('active');
    });

    // Close the dropdown when clicking anywhere else
    document.addEventListener('click', () => {
        dropdownContainer.classList.remove('active');
    });
});

// for the pop up


document.addEventListener("DOMContentLoaded", () => {
    const openPopupBtn = document.getElementById("openPopup");
    const popupContainer = document.getElementById("popupContainer");
    const closeBtn = document.querySelector(".close-btn");
    const sendInfoBtn = document.getElementById("sendInfo");

    // Open Popup
    openPopupBtn.addEventListener("click", () => {
        popupContainer.style.display = "flex";
    });

    // Close Popup (X button)
    closeBtn.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    // Close Popup when clicking "Send Info" (Only if inputs are filled)
    sendInfoBtn.addEventListener("click", () => {
        const input1 = document.getElementById("input1").value.trim();
        const input2 = document.getElementById("input2").value.trim();
        
        if (input1 && input2) {
            alert("Information Sent!"); // You can replace this with actual data handling
            popupContainer.style.display = "none"; // Close popup
        } else {
            alert("Please fill in both fields before submitting.");
        }
    });

    // Close Popup if clicking outside the box
    window.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });
});
