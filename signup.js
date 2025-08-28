

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Signup successful! 🎉 Redirecting to login...");
  window.location.href = "login.html"; 
});