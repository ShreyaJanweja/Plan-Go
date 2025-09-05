

const form = document.getElementById("loginForm");
const airplane = document.querySelector(".airplane");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (email && password) {
    // Show airplane and animate
    airplane.style.display = "block";
    airplane.animate(
      [
        { transform: "translateX(0) translateY(0)" },
        { transform: "translateX(120vw) translateY(-80vh)" }
      ],
      {
        duration: 2000,
        easing: "ease-in-out"
      }
    );

    // Redirect after animation
    setTimeout(() => {
      window.location.href = "project.html"; 
    }, 2000);
  } else {
    alert("Please enter both email and password.");
  }
});
