'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/* Reveal extra popular cards with animation */
(function () {
  const moreBtn = document.getElementById('more-destination-btn');
  const popularList = document.querySelector('.popular-list');

  if (!moreBtn || !popularList) return;

  moreBtn.addEventListener('click', function () {
    const revealed = popularList.classList.toggle('revealed');
    moreBtn.setAttribute('aria-expanded', String(revealed));
    moreBtn.textContent = revealed ? 'Show less' : 'More destintion';

    // optional: smooth scroll to newly revealed content when opening
    if (revealed) {
      // wait for a tiny moment for expansion to start then scroll
      requestAnimationFrame(() => {
        setTimeout(() => {
          // scroll to the first extra item
          const firstExtra = popularList.querySelector('.popular-item--extra');
          if (firstExtra) {
            firstExtra.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 120);
      });
    }
  });
})();


  
  const btn = document.getElementById("viewAllBtn");
  const extraPackages = document.querySelector(".extra-packages");

  btn.addEventListener("click", function () {

    if (extraPackages.classList.contains("show")) {
      // Hide packages
      extraPackages.classList.remove("show");
      
      setTimeout(() => {
        extraPackages.classList.add("hidden");
      }, 400); // must match CSS transition time

      btn.textContent = "View All Packages";

    } else {
      // Show packages
      extraPackages.classList.remove("hidden");

      setTimeout(() => {
        extraPackages.classList.add("show");
      }, 10); // tiny delay to trigger animation

      btn.textContent = "Show Less";
    }
  });
