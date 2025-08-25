const hamburger = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");
const nav = document.querySelector(".mob");
const header = document.querySelector("header");
const gray = document.querySelector(".gray--block");
hamburger.addEventListener("click", () => {
  header.classList.add("active");
  gray.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  header.classList.remove("active");
  gray.style.display = "none";
});

const Links = document.querySelectorAll(".link");

Links.forEach((link) => {
  const span = link.querySelector(".span");
  const subList = link.querySelector(".sub-list");
  span.addEventListener("click", () => {
    //Remove all active classes
    Links.forEach((item) => {
      item.classList.remove("active");
    });
    if (link.classList.contains("active")) {
      subList.style.display = "none";
      return;
    } else {
      link.classList.add("active");
    }
  });
});

const desktopLinks = document.querySelectorAll(".link");
const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");
desktopLinks.forEach((link) => {
  const span = link.querySelector(".span");

  span.addEventListener("click", () => {
    desktopLinks.forEach((i) => {
      i.classList.remove("clicked");
    });

    link.classList.toggle("clicked");
  });
  if (link.classList.contains("clicked")) {
    console.log("active");
  }
});
