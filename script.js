$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
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
