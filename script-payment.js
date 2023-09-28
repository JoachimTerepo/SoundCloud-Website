document.addEventListener("DOMContentLoaded", function () {
  const paymentForm = document.getElementById("payment-form");
  const confirmation = document.getElementById("confirmation");
  const submitButton = document.getElementById("submit-button");
  const backButton = document.getElementById("back-button");

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide the payment form
    paymentForm.style.display = "none";

    // Show the confirmation message
    confirmation.style.display = "block";
  });

  backButton.addEventListener("click", function () {
    // Hide the confirmation message
    confirmation.style.display = "none";

    // Show the payment form again
    paymentForm.style.display = "block";
  });
});
