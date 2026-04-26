// Typing Effect
const text = ["Vaibhavi 👋", "Web Developer 💻", "AI Enthusiast 🤖"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    j++;
  } else {
    j--;
  }

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// AOS Init
AOS.init();
