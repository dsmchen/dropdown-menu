export function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll(".has-secondary-list");

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("mouseenter", (e) => {
      const secondaryList = e.target.querySelector(".secondary-list");
      secondaryList.classList.add("shown");
    });
  });

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("mouseleave", (e) => {
      const secondaryList = e.target.querySelector(".secondary-list");
      secondaryList.classList.remove("shown");
    });
  });
}
