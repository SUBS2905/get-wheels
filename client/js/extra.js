const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");
const priceRange = document.querySelector("input[type=range]");
const currentPrice = document.querySelector("#current-price");

priceRange.addEventListener("input", (e) => {
  currentPrice.innerHTML = "Under Rs. " + e.target.value;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      console.log(id);
      if (id === "about" || id === "services") {
        navItems.forEach((item) => item.classList.remove("active"));
        document.querySelector(`.${id}`).classList.add("active");
      } else {
        navItems.forEach((item) => item.classList.remove("active"));
        document.querySelector(".home").classList.add("active");
      }
    }
  });
});

sections.forEach((section) => observer.observe(section));
