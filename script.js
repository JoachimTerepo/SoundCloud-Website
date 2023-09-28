// script.js

// Get references to the elements
const userProfileText = document.getElementById("user-profile-text");
const switchProfileButton = document.getElementById("switch-profile");

// Function to toggle the user profile
function toggleUserProfile() {
  const currentText = userProfileText.textContent;
  if (currentText === "Current User: Consumer Profile") {
    userProfileText.textContent = "Current User: Artist Profile";
  } else {
    userProfileText.textContent = "Current User: Consumer Profile";
  }
}

// Add a click event listener to the "Switch Profile" button
switchProfileButton.addEventListener("click", toggleUserProfile);
