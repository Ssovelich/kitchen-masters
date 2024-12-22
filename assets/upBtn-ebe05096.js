document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".btn-up");window.addEventListener("scroll",()=>{window.scrollY>300?(e.classList.add("show"),e.classList.remove("hide")):(e.classList.add("hide"),e.classList.remove("show"))}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=upBtn-ebe05096.js.map
