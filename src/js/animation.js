document.addEventListener('DOMContentLoaded', function () {
  let elements = document.getElementsByClassName('animate');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = '0';
  }
});
