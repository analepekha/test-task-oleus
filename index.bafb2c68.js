const transitions=document.querySelectorAll('a[href*="#"]');for(let t of transitions)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.bafb2c68.js.map
