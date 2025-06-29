// Smooth scroll to Menu section when button is clicked
function scrollToMenu() {
  const menuSection = document.getElementById("menu");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Optional: Form Submission Alert (can be expanded to use backend)
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
