// CALLING SIDEBAR LINKS

const sidebarLinks = document.querySelectorAll(".sidebar__link");

// CALLING DISPLAY CONTAINER
const displayContainers = document.querySelectorAll(".content-container");
console.log(displayContainers);

//loop for switching between tabs from the sidebar
sidebarLinks.forEach((sidebarLink, index) => {
  sidebarLink.addEventListener("click", (e) => {
    displayContainers.forEach((displayContainer) => {
      displayContainer.classList.remove("content-container--active");
    });
    sidebarLinks.forEach((link) => {
      link.classList.remove("sidebar__link--active");
    });
    e.target.classList.add("sidebar__link--active");
    displayContainers[index].classList.add("content-container--active");
  });
});
