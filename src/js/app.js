// Calling sidebar links

const sidebarLinks = document.querySelectorAll(".sidebar__link");

//loop for switching between tabs from the sidebar
sidebarLinks.forEach((sidebarLink) => {
  sidebarLink.addEventListener("click", (e) => {
    sidebarLinks.forEach((link) => {
      link.classList.remove("sidebar__link--active");
    });
    e.target.classList.add("sidebar__link--active");
  });
});
