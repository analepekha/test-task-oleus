const transitions = document.querySelectorAll('a[href*="#"]');
for (let transition of transitions)transition.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = transition.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

//# sourceMappingURL=index.e4c0c443.js.map
