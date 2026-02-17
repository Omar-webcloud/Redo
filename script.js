const menuToggleBtn = document.querySelector(".menu-toggle-btn");
const sidebar = document.querySelector(".sidebar");

if (menuToggleBtn) {
  menuToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("is-open");
    menuToggleBtn.textContent = sidebar.classList.contains("is-open")
      ? "Close"
      : "Menu";
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 779) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isMenuButton =
        event.target === menuToggleBtn || menuToggleBtn.contains(event.target);

      if (
        !isClickInsideSidebar &&
        !isMenuButton &&
        sidebar.classList.contains("is-open")
      ) {
        sidebar.classList.remove("is-open");
        menuToggleBtn.textContent = "Menu";
      }
    }
  });
}

document.querySelector(".nav-list").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
