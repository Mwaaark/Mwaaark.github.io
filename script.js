const navbar = document.getElementById("mainNavbar");
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > navbar.clientHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

AOS.init({ duration: 1000 });

const completedTab = document.getElementById("pills-completed-tab");
const inProgressTab = document.getElementById("pills-inprogress-tab");

completedTab.addEventListener("click", function () {
  setTimeout(function () {
    AOS.refreshHard();
  }, 500);
});

inProgressTab.addEventListener("click", function () {
  setTimeout(function () {
    AOS.refreshHard();
  }, 500);
});
