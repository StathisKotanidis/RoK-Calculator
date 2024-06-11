// alert("hi");

const menuBtns = document.querySelectorAll(".menu-buttons");
const container = document.querySelector(".container");

menuBtns.forEach((button) => {
  button.addEventListener("click", () => {
    container.style.display = "none";
  });
});
