// Typing Effect
const roles = ["Vaibhavi 👋", "Web Developer 💻", "AI Enthusiast 🤖"];
let i = 0, j = 0;
let current = "";
let deleting = false;

function typeEffect() {
  current = roles[i];

  if (!deleting) {
    j++;
  } else {
    j--;
  }

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(typeEffect, 1000);
  } else if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, deleting ? 50 : 100);
  }
}

typeEffect();

// AOS Animation
AOS.init({
  duration: 1000
});
