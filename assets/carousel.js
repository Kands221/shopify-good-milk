let idInput;
document.addEventListener('DOMContentLoaded', function () {
  const circular_slider = document.querySelector('.wrapper');
  const slides = document.querySelectorAll('.slides');
  const images = document.querySelectorAll('.slides img');
  const circle = document.querySelector('.circle');

  const circleColor = [
    '#E8FFE9',
    '#FFFCF1',
    '#FEF5F5',
    '#FFFCF1',
    '#FEF5F5',
    '#E9FAFF',
  ];
  let currentIndex = 0;
  let currentRotation = 24;

  document.getElementById('leftButton').addEventListener('click', function () {
    rotateSlider('left');
  });

  document.getElementById('rightButton').addEventListener('click', function () {
    rotateSlider('right');
  });

  function rotateSlider(direction) {
    const rotationIncrement = 360 / slides.length;

    if (direction === 'left') {
      currentRotation += rotationIncrement;
      currentIndex =
        (currentIndex - 1 + circleColor.length) % circleColor.length;
    } else {
      currentRotation -= rotationIncrement;
      currentIndex = (currentIndex + 1) % circleColor.length;
    }

    circular_slider.style.transform = `rotate(${currentRotation}deg)`;
    circle.style.backgroundColor = circleColor[currentIndex];

    // Remove the previous button color class

    // Wait for the next frame to apply the new class and trigger the transitio

    images.forEach((img, j) => {
      img.style.setProperty('--img-no', 2);
    });
  }
});
