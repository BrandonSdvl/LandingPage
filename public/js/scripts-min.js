"use strict";var accordion=document.getElementById("accordion");accordion.addEventListener("click",(function(t){t.target.classList.contains("accordion__header")&&(t.target.nextElementSibling.classList.toggle("accordion__content--active"),t.target.lastElementChild.classList.toggle("accordion__image--active"))}));var form=document.getElementById("form");form.addEventListener("submit",(function(t){t.preventDefault()}));var hamburger=document.getElementById("hamburger"),nav=document.getElementById("nav"),logo=document.querySelector(".header__logo");hamburger.addEventListener("click",(function(t){nav.classList.contains("nav--show")?nav.classList.contains("nav--show")&&(t.target.src="images/icon-hamburger.svg",nav.classList.remove("nav--show"),logo.src="images/logo-bookmark.svg"):(t.target.src="images/icon-close.svg",nav.classList.add("nav--show"),logo.src="images/logo-bookmark-white.svg")}));var tabs=document.getElementById("tabs"),tabsItem=document.querySelectorAll(".tabs__item"),articles=document.querySelectorAll(".article");tabs.addEventListener("click",(function(t){t.target.classList.contains("tabs__item")&&(tabsItem.forEach((function(t){t.classList.remove("tabs__item--active")})),t.target.classList.add("tabs__item--active"),articles.forEach((function(t){return t.classList.remove("article--show")})),"firstTab"===t.target.id?articles[0].classList.add("article--show"):"secondTab"===t.target.id?articles[1].classList.add("article--show"):"thirdTab"===t.target.id&&articles[2].classList.add("article--show"))}));