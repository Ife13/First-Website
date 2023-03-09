function showPopup() {
    document.getElementById("intro-popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("intro-popup").style.display = "none";
  }
  
  window.onload = function() {
    showPopup();
  };
  