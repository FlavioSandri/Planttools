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

// Footer animations (opcional)
document.addEventListener('DOMContentLoaded', function() {
  // Observa quando o footer entra na viewport
  const footer = document.querySelector('.apple-footer');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  if (footer) {
    observer.observe(footer);
  }
  
  // Smooth scroll para links do footer
  document.querySelectorAll('.footer-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});