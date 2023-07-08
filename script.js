document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetElement = document.querySelector(link.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

const footerYear = document.querySelector("#footer-year");
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}
