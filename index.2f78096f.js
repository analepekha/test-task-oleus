document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section[id^='section']");
    // Функция для обработки события прокрутки
    function handleScroll(event) {
        var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // Определение текущего раздела
        var currentSection = null;
        for(var i = 0; i < sections.length; i++){
            var rect = sections[i].getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = sections[i];
                break;
            }
        }
        // Прокрутка к текущему разделу
        if (currentSection) {
            var sectionId = currentSection.getAttribute("id");
            var navLink = document.querySelector("a[href='#" + sectionId + "']");
            navLink.classList.add("activeLink");
            for(var j = 0; j < sections.length; j++)if (sections[j] !== currentSection) {
                var otherNavLink = document.querySelector("a[href='#" + sections[j].getAttribute("id") + "']");
                otherNavLink.classList.remove("activeLink");
            }
        }
    }
    // Обработчик события прокрутки
    window.addEventListener("scroll", handleScroll);
});

//# sourceMappingURL=index.2f78096f.js.map
