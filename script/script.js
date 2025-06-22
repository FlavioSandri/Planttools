document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transition = "all 0.3s ease";
    link.style.color = "#3a6b50";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "";
  });
});

const profileIcon = document.getElementById("profileIcon");
const profileDropdown = document.getElementById("profileDropdown");

profileIcon.addEventListener("click", () => {
  profileDropdown.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
    profileDropdown.classList.remove("show");
  }
});

