


const form = document.getElementById("loginForm");
const airplane = document.querySelector(".airplane");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show airplane and animate
  airplane.style.display = "block";
  airplane.animate([
    { transform: "translateX(0) translateY(0)" },
    { transform: "translateX(120vw) translateY(-80vh)" }
  ], {
    duration: 2000,
    easing: "ease-in-out"
  });

  // Redirect after animation
  setTimeout(() => {
    window.location.href = "home.html"; // apna home page ka path yahan daalna
  }, 2000);
});
