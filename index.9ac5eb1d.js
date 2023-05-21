function handleHover(event) {
    const target = event.target;
    const mainBlock = document.getElementById("mainBlock");
    const mainBlockWidth = mainBlock.offsetWidth;
    // Сохраняем текущие значения стилей блока
    const targetStyles = {
        width: target.style.width,
        transform: target.style.transform
    };
    // Применяем анимацию для смещения блока
    target.style.transition = "transform 0.3s";
    target.style.transform = `translateX(${mainBlockWidth - target.offsetWidth}px)`;
    // Восстанавливаем стили при отведении мыши
    target.addEventListener("mouseleave", ()=>{
        target.style.transition = "transform 0.3s";
        target.style.transform = targetStyles.transform;
    });
}
const blocks = document.querySelectorAll(".block:not(#mainBlock)");
blocks.forEach((block)=>{
    block.addEventListener("mouseover", handleHover);
});

//# sourceMappingURL=index.9ac5eb1d.js.map
