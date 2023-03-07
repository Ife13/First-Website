// Show the pop-up message
function showPopup() {
    document.getElementById("intro-popup").style.display = "block";
  }
  
  // Hide the pop-up message
  function closePopup() {
    document.getElementById("intro-popup").style.display = "none";
  }
  
  // Show the pop-up message when the page is loaded
  window.onload = function() {
    showPopup();
  };
  