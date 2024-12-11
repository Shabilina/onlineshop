document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const dropdownLinks = document.querySelectorAll(".mobile-menu .dropdown > a");

  // Toggle hamburger menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    hamburger.setAttribute(
      "aria-expanded",
      mobileMenu.classList.contains("open")
    );
  });

  // Handle dropdown menu toggle in mobile
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const parentDropdown = link.parentElement;
      const submenu = parentDropdown.querySelector(".dropdown-menu");

      if (submenu) {
        submenu.classList.toggle("open");
      }
    });
  });
});
