function addBackgroundColor() {
    const blocks = document.querySelectorAll(".block");
    if (window.matchMedia("(max-width: 1063px)").matches) blocks.forEach((block, index)=>{
        let color;
        switch(index){
            case 0:
                maxWidth = "300px";
                marginRight = "0px";
                color = "#d3f332";
                break;
            case 1:
                maxWidth = "300px";
                marginRight = "0px";
                color = "#F5544B";
                break;
            case 2:
                maxWidth = "300px";
                marginRight = "0";
                color = "#2844E6";
                break;
            case 3:
                maxWidth = "300px";
                marginRight = "0";
                color = "#595CD4";
                break;
            default:
                color = "transparent";
                break;
        }
        block.style.backgroundColor = color;
        block.style.width = maxWidth;
        block.style.marginRight = marginRight;
    });
    if (window.matchMedia("(min-width: 1064px)").matches) blocks.forEach((block, index)=>{
        let color;
        switch(index){
            case 0:
                maxWidth = "703px";
                marginRight = "79px";
                color = "#d3f332";
                break;
            case 1:
                maxWidth = "147px";
                marginRight = "21px";
                color = "#F5544B";
                break;
            case 2:
                maxWidth = "147px";
                marginRight = "21px";
                color = "#2844E6";
                break;
            case 3:
                maxWidth = "147px";
                marginRight = "21px";
                color = "#595CD4";
                break;
            default:
                color = "transparent";
                break;
        }
        block.style.backgroundColor = color;
        block.style.width = maxWidth;
        block.style.marginRight = marginRight;
    });
}
addBackgroundColor();

//# sourceMappingURL=index.7aed27df.js.map
