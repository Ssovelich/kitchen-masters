import"./assets/style-8ddf06d0.js";import{S as i,K as r,M as l,P as c}from"./assets/vendor-7828e712.js";new i(".swiper",{modules:[r,l,c],speed:1e3,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,eventsTarget:".swiper"},breakpoints:{320:{centredSlides:!0,slidesPerGroup:2,slidesPerView:2,spaceBetween:16},1200:{slidesPerGroup:1,slidesPerView:3,spaceBetween:32}}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu"),s=document.querySelector(".open-mobile-menu-btn"),o=document.querySelector(".close-mobile-menu-btn"),n=document.body;s.addEventListener("click",()=>{e.classList.add("is-open"),n.classList.add("no-scroll")}),o.addEventListener("click",()=>{e.classList.remove("is-open"),n.classList.remove("no-scroll")}),document.querySelectorAll(".mobile-menu-list-link").forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("is-open"),n.classList.remove("no-scroll")})})});
//# sourceMappingURL=commonHelpers.js.map
