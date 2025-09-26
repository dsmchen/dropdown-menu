export function dropdownMenu() {
  const dropdownMenu = document.querySelector(".has-secondary-list");

  dropdownMenu.addEventListener("mouseenter", (e) => {
    const secondaryList = e.target.querySelector(".secondary-list");
    secondaryList.classList.add("shown");
  });

  dropdownMenu.addEventListener("mouseleave", (e) => {
    const secondaryList = e.target.querySelector(".secondary-list");
    secondaryList.classList.remove("shown");
  });
}
