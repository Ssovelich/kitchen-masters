import{S as l,N as c,K as u,M as d,P as a}from"./assets/vendor-0338de53.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new l(".swiper",{modules:[c,u,d,a],speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,eventsTarget:".swiper"},breakpoints:{320:{centredSlides:!0,slidesPerGroup:2,slidesPerView:2,spaceBetween:16},1200:{slidesPerGroup:1,slidesPerView:3,spaceBetween:32}}});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".mobile-menu"),r=document.querySelector(".open-mobile-menu-btn"),s=document.querySelector(".close-mobile-menu-btn"),o=document.body;r.addEventListener("click",()=>{n.classList.add("is-open"),o.classList.add("no-scroll")}),s.addEventListener("click",()=>{n.classList.remove("is-open"),o.classList.remove("no-scroll")}),document.querySelectorAll(".mobile-menu-list-link").forEach(t=>{t.addEventListener("click",()=>{n.classList.remove("is-open"),o.classList.remove("no-scroll")})})});
//# sourceMappingURL=commonHelpers.js.map