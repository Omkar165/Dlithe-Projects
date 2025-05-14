// ✅ Logout Functionality
document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault(); // 🔥 Prevent default <a> tag behavior
            if (confirm("Are you sure you want to log out?")) {
                window.location.href = "online-banking.html";
            }
        });
    }
});

// ✅ Fund Transfer Functionality
document.addEventListener("DOMContentLoaded", function () {
    const transferForm = document.getElementById("transferForm");
    const successMessage = document.getElementById("successMessage");

    if (!transferForm || !successMessage) {
        console.error("Form or success message not found!");
        return;
    }

    transferForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let amount = document.getElementById("amount").value.trim();
        let toAccount = document.getElementById("toAccount").value.trim();

        if (amount && !isNaN(amount) && parseFloat(amount) > 0 && toAccount !== "") {
            successMessage.textContent = `₹${amount} transferred to ${toAccount} successfully!`;
            successMessage.style.display = "block"; // Show success message
            successMessage.style.backgroundColor = "#28a745"; // Green background for success
            successMessage.style.color = "#fff"; // White text

            // Clear input fields after 1 second (so user sees success message first)
            setTimeout(() => {
                transferForm.reset();
            }, 1000);
        } else {
            successMessage.textContent = "Invalid amount or account!";
            successMessage.style.display = "block"; // Show error message
            successMessage.style.backgroundColor = "#dc3545"; // Red background for error
            successMessage.style.color = "#fff"; // White text
        }

        // Hide message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
