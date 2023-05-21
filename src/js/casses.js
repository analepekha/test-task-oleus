function addBackgroundColor() {
  const blocks = document.querySelectorAll('.block');
  if (window.matchMedia('(max-width: 1063px)').matches) {
    blocks.forEach((block, index) => {
      let color;
      let width;
      switch (index) {
        case 0:
          width = '300px';
          marginRight = '0px';
          color = '#d3f332';
          break;
        case 1:
          width = '300px';
          marginRight = '0px';
          color = '#F5544B';
          break;
        case 2:
          width = '300px';
          marginRight = '0';
          color = '#2844E6';
          break;
        case 3:
          width = '300px';
          marginRight = '0';
          color = '#595CD4';
          break;
        default:
          color = 'transparent';
          break;
      }
      block.style.backgroundColor = color;
      block.style.width = width;
      block.style.marginRight = marginRight;
    });
  } else if (window.matchMedia('(min-width: 1064px)').matches) {
    blocks.forEach((block, index) => {
      let color;
      let width;
      switch (index) {
        case 0:
          width = '703px';
          marginRight = '79px';
          color = '#d3f332';
          break;
        case 1:
          width = '147px';
          marginRight = '21px';
          color = '#F5544B';
          break;
        case 2:
          width = '147px';
          marginRight = '21px';
          color = '#2844E6';
          break;
        case 3:
          width = '147px';
          marginRight = '21px';
          color = '#595CD4';
          break;
        default:
          color = 'transparent';
          break;
      }
      block.style.backgroundColor = color;
      block.style.width = width;
      block.style.marginRight = marginRight;
    });
  }
}

addBackgroundColor();
