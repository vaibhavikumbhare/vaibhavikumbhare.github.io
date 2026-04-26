document.getElementById("year").innerText =
"© " + new Date().getFullYear() + " Vaibhavi Kumbhare";

const text = ["Developer", "AI Enthusiast", "Problem Solver"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    current = text[i];
    if (deleting) j--; else j++;
    document.querySelector(".typing").textContent = current.substring(0, j);

    if (!deleting && j === current.length) {
        deleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}
type();

const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
