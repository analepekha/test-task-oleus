new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    //   sectionsColor: ['#fe5f46', '#0998ec', '#fc6c7c', '#fec304'],
    navigation: true,
    slidesNavigation: true,
    licenseKey: "gplv3-license",
    // anchors: ['Home', 'About', 'Services', 'Cases'],
    //   navigationTooltips: ['Home', 'About', 'Services', 'Cases'],
    afterLoad: function(origin, destination, direction) {
        // Проверяем, является ли текущая секция целевой секцией, для которой нужно отключить плагин
        if (destination.index === 4) // Отключаем плагин fullpage.js
        fullpage_api.setAllowScrolling(false);
        else // Включаем плагин fullpage.js для остальных секций
        fullpage_api.setAllowScrolling(true);
    }
});

//# sourceMappingURL=index.83b83e0b.js.map
